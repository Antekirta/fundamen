import { Injectable } from '@nestjs/common';
import { CategoryService } from '../domain/product/modules/category/category.service';
import {
  CategoryToAddInterface,
  ProductToAddInterface,
} from '../domain/product/product.domain.interface';
import { getRandom } from '../utils/number';
import { CategoryToCategoryService } from '../domain/product/modules/category_to_category/category_to_category.service';
import { ProductService } from '../domain/product/modules/product/product.service';
import { ProductToCategoryService } from '../domain/product/modules/product_to_category/product_to_category.service';

const NUMBER_OF_CATEGORIES = 20;
const NUMBER_OF_PARENT_CATEGORIES = 5;
const NUMBER_OF_PRODUCTS = 100;

const categories: CategoryToAddInterface[] = Array.from(
  new Array(NUMBER_OF_CATEGORIES),
).map((_, i) => {
  return {
    name: `Seeded category ${i + 1}`,
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

@Injectable()
export class SeedService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly categoryToCategoryService: CategoryToCategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
  ) {}

  async seed() {
    await this.clearTables();

    const categoriesIds = await this.seedCategories();
    await this.seedProducts(categoriesIds);
  }

  async clearTables() {
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
}
