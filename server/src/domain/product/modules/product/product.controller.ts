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
import {
  ProductInterface,
  ProductToAddInterface,
} from '../../product.domain.interface';
import { ROUTES } from '../../product.domain.registry';

@Controller(ROUTES.PRODUCTS.BASE)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(
    @Query() searchParams: Partial<ProductInterface>,
  ): Promise<ProductInterface[]> {
    return await this.productService.getProducts(searchParams);
  }

  @Get(`${ROUTES.PRODUCTS.ID}/:id`)
  async getProductById(@Param('id') id: number): Promise<ProductInterface> {
    return await this.productService.getProductById(id);
  }

  @Get(`${ROUTES.PRODUCTS.SLUG}/:slug`)
  async getProduct(@Param('slug') slug: string): Promise<ProductInterface[]> {
    return await this.productService.getProducts({ slug });
  }

  @Post()
  async createProduct(@Body() product: ProductToAddInterface): Promise<void> {
    await this.productService.addProductsBase([product]);
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
  }
}
