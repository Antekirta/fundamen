import { Injectable } from '@nestjs/common';
import { CategoryService } from '../../domain/product/modules/category/category.service';
import { ProductToCategoryService } from '../../domain/product/modules/product_to_category/product_to_category.service';
import { ProductService } from '../../domain/product/modules/product/product.service';

@Injectable()
export class BuyProductService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly productService: ProductService,
    private readonly productToCategoryService: ProductToCategoryService,
  ) {}

  async run() {
    /** Main page */
    const categories = await this.categoryService.getCategories();

    const categoryId = 1;

    /** Category page */
    const selectCategory =
      await this.categoryService.getCategoryById(categoryId);

    const products =
      await this.productToCategoryService.getProductsOfCategory(categoryId);

    const productId = 1;

    /** Product page */
    const selectedProduct = await this.productService.getProductById(productId);

    console.log('Selected product:', selectedProduct);
  }
}
