import { Injectable } from '@nestjs/common';
import { CategoryService } from '../domain/product/modules/category/category.service';
import {
  CategoryToAddInterface,
  ProductPropertyInterface,
  ProductPropertyToAddInterface,
  ProductPropertyValueToAddInterface,
  ProductToAddInterface,
  ProductTypeToAddInterface,
} from '../domain/product/product.domain.interface';
import { getRandom } from '../utils/number';
import { CategoryToCategoryService } from '../domain/product/modules/category_to_category/category_to_category.service';
import { ProductService } from '../domain/product/modules/product/product.service';
import { ProductToCategoryService } from '../domain/product/modules/product_to_category/product_to_category.service';
import { ProductDescriptionService } from '../domain/product/modules/productDescription/productDescription.service';

const NUMBER_OF_CATEGORIES = 20;
const NUMBER_OF_PARENT_CATEGORIES = 5;
const NUMBER_OF_PRODUCT_TYPES = 2;
const NUMBER_OF_PRODUCT_PROPERTIES = 20;
const NUMBER_OF_PRODUCT_PROPERTIES_VALUES = 60;
const NUMBER_OF_PRODUCTS = 100;

const categories: CategoryToAddInterface[] = Array.from(
  new Array(NUMBER_OF_CATEGORIES),
).map((_, i) => {
  return {
    name: `Seeded category ${i + 1}`,
  };
});

const productTypes: ProductTypeToAddInterface[] = Array.from(
  new Array(NUMBER_OF_PRODUCT_TYPES),
).map((_, i) => {
  return {
    name: `Seeded product type ${i + 1}`,
  };
});

const productProperties: ProductPropertyToAddInterface[] = Array.from(
  new Array(NUMBER_OF_PRODUCT_PROPERTIES),
).map((_, i) => {
  return {
    name: `Seeded product property ${i + 1}`,
    description: `Seeded product property description ${i + 1}`,
  };
});

const productPropertiesValues: ProductPropertyValueToAddInterface[] =
  Array.from(new Array(NUMBER_OF_PRODUCT_PROPERTIES_VALUES)).map((_, i) => {
    return {
      value: `Seeded product property value ${i + 1}`,
    };
  });

const products: ProductToAddInterface[] = Array.from(
  new Array(NUMBER_OF_PRODUCTS),
).map((_, i) => {
  return {
    name: `Seeded product ${i + 1}`,
    description: `Seeded description ${i + 1}`,
    price: getRandom(100, 1000),
    stock_quantity: getRandom(1, 100),
    images_urls: [],
    primary_image_url: '',
    is_active: true,
    product_type: 1,
  };
});

const bindCategories = (
  ids: number[],
): Array<{ child: number; parent: number }> => {
  const numOfParentCategories = NUMBER_OF_PARENT_CATEGORIES;
  const parentCategories = ids.slice(0, numOfParentCategories);
  const childCategories = ids.slice(numOfParentCategories);

  return childCategories.map((childCategory) => {
    return {
      child: childCategory,
      parent: parentCategories[getRandom(0, numOfParentCategories - 1)],
    };
  });
};

const addProductsToCategories = (
  productsIds: number[],
  categoriesIds: number[],
): Array<{ productId: number; categoryId: number }> => {
  const numOfCategories = categoriesIds.length;

  return [
    {
      productId: productsIds[0],
      categoryId: 1,
    },
    ...productsIds.slice(1).map((productId) => {
      return {
        productId,
        categoryId: categoriesIds[getRandom(0, numOfCategories - 1)],
      };
    }),
  ];
};

const addPropertiesToProductTypes = (
  productTypesIds: number[],
  productPropertiesIds: number[],
): Array<{ productTypeId: number; productPropertyId: number }> => {
  const numOfProductTypes = productTypesIds.length;

  return productPropertiesIds.map((productPropertyId) => {
    return {
      productTypeId: productTypesIds[getRandom(0, numOfProductTypes - 1)],
      productPropertyId,
    };
  });
};

const addValuesToProductProperties = (
  productPropertiesIds: number[],
  propertiesValuesIds: number[],
): Array<{ productPropertyId: number; propertyValueId: number }> => {
  const numOfProductProperties = productPropertiesIds.length;

  return propertiesValuesIds.map((propertyValueId) => {
    return {
      productPropertyId:
        productPropertiesIds[getRandom(0, numOfProductProperties - 1)],
      propertyValueId,
    };
  });
};

@Injectable()
export class SeedService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryToCategoryService: CategoryToCategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
    private readonly productDescriptionService: ProductDescriptionService,
  ) {}

  async seed() {
    await this.clearTables();

    await this.seedProductProperties();
    const categoriesIds = await this.seedCategories();
    await this.seedProducts(categoriesIds);
  }

  async clearTables() {
    await this.productDescriptionService.clearPropertiesToProductTypesTable();
    await this.productDescriptionService.clearProductTypesTable();
    await this.productDescriptionService.clearProductPropertiesTable();
    await this.productDescriptionService.clearProductPropertyValuesTable();
    await this.productToCategoryService.clearTable();
    await this.categoryToCategoryService.clearTable();

    await this.categoryService.clearTable();
    await this.productService.clearTable();
  }

  async seedCategories(): Promise<number[]> {
    const addedCategoriesIds = (
      await this.categoryService.addCategories(categories)
    ).map((row) => row.id);

    const boundCategories = bindCategories(addedCategoriesIds);

    for (const { parent, child } of boundCategories) {
      await this.categoryToCategoryService.addCategoryToCategory(parent, child);
    }

    return addedCategoriesIds;
  }

  async seedProducts(categoryIds: number[]) {
    const addedProductsIds = (
      await this.productService.addProductsBase(products)
    ).map((row) => row.id);

    const productsBoundToCategories = addProductsToCategories(
      addedProductsIds,
      categoryIds,
    );

    for (const { productId, categoryId } of productsBoundToCategories) {
      await this.productToCategoryService.addProductToCategory(
        categoryId,
        productId,
      );
    }
  }

  async seedProductProperties() {
    const addedProductTypesIds = (
      await this.productDescriptionService.addProductTypes(productTypes)
    ).map((row) => row.id);

    const addedProductPropertiesIds = (
      await this.productDescriptionService.addProductProperties(
        productProperties,
      )
    ).map((row) => row.id);

    const propertiesBoundToProductTypes = addPropertiesToProductTypes(
      addedProductTypesIds,
      addedProductPropertiesIds,
    );

    for (const {
      productTypeId,
      productPropertyId,
    } of propertiesBoundToProductTypes) {
      await this.productDescriptionService.addPropertiesToProductTypes(
        productTypeId,
        productPropertyId,
      );
    }

    const addedProductPropertyValuesIds = (
      await this.productDescriptionService.addProductPropertyValues(
        productPropertiesValues,
      )
    ).map((row) => row.id);

    const valuesBoundToProperties = addValuesToProductProperties(
      addedProductPropertiesIds,
      addedProductPropertyValuesIds,
    );
  }
}
