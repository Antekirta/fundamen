import { Injectable } from '@nestjs/common';
import { CategoryService } from '../domain/product/modules/category/category.service';
import {
  CategoryToAddInterface,
  ProductPropertyInterface,
  ProductPropertyToAddInterface,
  ProductPropertyToValueInterface,
  ProductPropertyValueToAddInterface,
  ProductTypeToAddInterface,
  ProductTypeToPropertyInterface,
} from '../domain/product/product.domain.interface';
import { getRandom } from '../utils/number';
import { CategoryToCategoryService } from '../domain/product/modules/category_to_category/category_to_category.service';
import { ProductService } from '../domain/product/modules/product/product.service';
import { ProductToCategoryService } from '../domain/product/modules/product_to_category/product_to_category.service';
import { ProductTypeService } from '../domain/product/modules/product-type/product-type.service';
import { ProductPropertyService } from '../domain/product/modules/product-property/product-property.service';
import { ProductPropertyValueService } from '../domain/product/modules/product-property-value/product-property-value.service';
import { ProductTypeToPropertiesService } from '../domain/product/modules/product-type_to_properties/product-type_to_properties.service';
import { ProductPropertyToValuesService } from '../domain/product/modules/product-property_to_values/product-property_to_values.service';
import { ProductToPropertyToValueService } from '../domain/product/modules/product_to_property_to_value/product_to_property_to_value.service';

const NUMBER_OF_CATEGORIES = 20;
const NUMBER_OF_PARENT_CATEGORIES = 5;
const NUMBER_OF_PRODUCT_TYPES = 2;
const NUMBER_OF_PRODUCT_PROPERTIES = 20;
const NUMBER_OF_PRODUCT_PROPERTIES_VALUES = 60;
const NUMBER_OF_PRODUCTS = 10;

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
    name: `property_${i + 1}`,
    title: `Seeded product property ${i + 1}`,
    description: `Seeded product property description ${i + 1}`,
    has_predefined_values: true,
  };
});

const productPropertiesValues: ProductPropertyValueToAddInterface[] =
  Array.from(new Array(NUMBER_OF_PRODUCT_PROPERTIES_VALUES)).map((_, i) => {
    return {
      value: `Value ${i + 1}`,
    };
  });

const getProducts = ({ addedProductTypesIds }) => {
  return Array.from(new Array(NUMBER_OF_PRODUCTS)).map((_, i) => {
    return {
      name: `Seeded product ${i + 1}`,
      description: `Seeded description ${i + 1}`,
      price: getRandom(100, 1000),
      stock_quantity: getRandom(1, 100),
      images_urls: [],
      primary_image_url: '',
      is_active: true,
      product_type:
        addedProductTypesIds[getRandom(0, addedProductTypesIds.length - 1)],
    };
  });
};

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
  productPropertiesNames: string[],
): Array<ProductTypeToPropertyInterface> => {
  const numOfProductTypes = productTypesIds.length;

  return productPropertiesNames.map((productPropertiesName) => {
    return {
      product_type_id: productTypesIds[getRandom(0, numOfProductTypes - 1)],
      product_property_name: productPropertiesName,
    };
  });
};

const addValuesToProductProperties = (
  productPropertiesNames: string[],
  propertiesValuesIds: number[],
): Array<ProductPropertyToValueInterface> => {
  const numOfProductProperties = productPropertiesNames.length;

  return propertiesValuesIds.map((propertyValueId) => {
    return {
      product_property_name:
        productPropertiesNames[getRandom(0, numOfProductProperties - 1)],
      product_property_value_id: propertyValueId,
    };
  });
};

const getProductPropertiesModel = (
  productProperties: ProductPropertyInterface[],
  propertiesValuesIds: number[],
) => {
  return productProperties.reduce((acc, { name, has_predefined_values }) => {
    return {
      ...acc,
      [name]: has_predefined_values
        ? propertiesValuesIds[getRandom(0, propertiesValuesIds.length - 1)]
        : `${Math.random()}`, // some random string
    };
  }, {});
};

@Injectable()
export class SeedService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryToCategoryService: CategoryToCategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
    private readonly productTypeService: ProductTypeService,
    private readonly productPropertyService: ProductPropertyService,
    private readonly productPropertyValueService: ProductPropertyValueService,
    private readonly productTypeToPropertiesService: ProductTypeToPropertiesService,
    private readonly productPropertyToValuesService: ProductPropertyToValuesService,
    private readonly productToPropertyToValueService: ProductToPropertyToValueService,
  ) {}

  async seed() {
    await this.clearTables();

    const { addedProductTypesIds, addedPropertiesValuesIds } =
      await this.seedProductProperties();
    const categoriesIds = await this.seedCategories();
    await this.seedProducts(categoriesIds, {
      addedProductTypesIds,
      addedPropertiesValuesIds,
    });
  }

  async clearTables() {
    await this.productToPropertyToValueService.clearTable();
    await this.productPropertyToValuesService.clearTable();
    await this.productTypeToPropertiesService.clearTable();
    await this.productPropertyValueService.clearTable();
    await this.productPropertyService.clearTable();
    await this.productTypeService.clearTable();

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

  async seedProducts(
    categoryIds: number[],
    { addedProductTypesIds, addedPropertiesValuesIds },
  ) {
    const addedProductsIds = (
      await this.productService.addProductsBase(
        getProducts({
          addedProductTypesIds,
        }),
      )
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

    const addedProducts = await this.productService.getProducts();

    for (const product of addedProducts) {
      // INFO: You may speed up this part by caching properties for product types
      const propertiesForProductType =
        await this.productTypeToPropertiesService.getPropertiesByProductTypeId(
          product.product_type,
        );

      await this.productToPropertyToValueService.addValuesToPropertiesOfProduct(
        product.id,
        getProductPropertiesModel(
          propertiesForProductType,
          addedPropertiesValuesIds,
        ),
      );
    }
  }

  async seedProductProperties() {
    const addedProductTypesIds = (
      await this.productTypeService.addProductTypes(productTypes)
    ).map((row) => row.id);

    const addedProductPropertiesNames = (
      await this.productPropertyService.addProductProperties(productProperties)
    ).map((row) => row.name);

    const addedPropertiesValuesIds = (
      await this.productPropertyValueService.addProductPropertyValues(
        productPropertiesValues,
      )
    ).map((row) => row.id);

    const propertiesBoundToProductTypes = addPropertiesToProductTypes(
      addedProductTypesIds,
      addedProductPropertiesNames,
    );

    await this.productTypeToPropertiesService.addPropertiesToProductType(
      propertiesBoundToProductTypes,
    );

    const valuesBoundToProperties = addValuesToProductProperties(
      addedProductPropertiesNames,
      addedPropertiesValuesIds,
    );

    await this.productPropertyToValuesService.addValuesToProperties(
      valuesBoundToProperties,
    );

    return {
      addedProductTypesIds,
      addedPropertiesValuesIds,
    };
  }
}
