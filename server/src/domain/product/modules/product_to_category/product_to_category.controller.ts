import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductInterface } from '../../product.domain.interface';
import { ProductToCategoryService } from './product_to_category.service';

@Controller()
export class ProductToCategoryController {
  constructor(private productToCategoryService: ProductToCategoryService) {}

  @Get('category/:category_id')
  async getProductsFromCategory(
    @Param('category_id') category_id: number,
    @Query() searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return await this.productToCategoryService.getProductsFromCategory(
      category_id,
      searchParams,
    );
  }

  @Post('/category/:category_id/product/:product_id')
  async addProductToCategory(
    @Param('category_id') category_id: number,
    @Param('product_id') product_id: number,
  ): Promise<void> {
    await this.productToCategoryService.addProductToCategory(
      category_id,
      product_id,
    );
  }

  @Delete('/category/:category_id/product/:product_id')
  async deleteProductCategory(
    @Param('category_id') category_id: number,
    @Param('product_id') product_id: number,
  ): Promise<void> {
    await this.productToCategoryService.deleteProductFromCategory(
      category_id,
      product_id,
    );
  }
}
