import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInterface, ProductToAddInterface } from './product.interface';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(
    @Query() searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return await this.productService.getProducts(searchParams);
  }

  @Get('category/:category_id')
  async getProductsFromCategory(
    @Param('category_id') category_id: number,
    @Query() searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return await this.productService.getProductsFromCategory(
      category_id,
      searchParams,
    );
  }

  @Get('id/:id')
  async getProductById(@Param('id') id: number): Promise<ProductInterface> {
    return await this.productService.getProductById(id);
  }

  @Get(':slug')
  async getProduct(@Param('slug') slug: string): Promise<ProductInterface[]> {
    return await this.productService.getProducts({ slug });
  }

  @Post()
  async createProduct(@Body() product: ProductToAddInterface): Promise<void> {
    await this.productService.addProduct(product);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() product: ProductToAddInterface,
  ): Promise<void> {
    await this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.productService.deleteProduct(id);

    this.productService.deleteProductFromAllCategories(id);
  }

  @Post('/categories/:category_id/product/:product_id')
  async addProductToCategory(
    @Param('category_id') category_id: number,
    @Param('product_id') product_id: number,
  ): Promise<void> {
    await this.productService.addProductToCategory(category_id, product_id);
  }

  @Delete('/categories/:category_id/product/:product_id')
  async deleteProductCategory(
    @Param('category_id') category_id: number,
    @Param('product_id') product_id: number,
  ): Promise<void> {
    await this.productService.deleteProductFromCategory(
      category_id,
      product_id,
    );
  }
}
