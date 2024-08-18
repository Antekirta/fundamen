import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import {
  CategoryInterface,
  CategoryToAddInterface,
} from '../../product.domain.interface';
import { ROUTES } from '../../product.domain.registry';

@Controller(ROUTES.CATEGORIES.BASE)
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getCategories(): Promise<CategoryInterface[]> {
    return await this.categoryService.getCategories();
  }

  @Get(`${ROUTES.CATEGORIES.ID}/:id`)
  async getCategoryById(@Param('id') id: number): Promise<CategoryInterface> {
    return await this.categoryService.getCategoryById(id);
  }

  @Get(`${ROUTES.CATEGORIES.SLUG}/:slug`)
  async getCategoryBySlug(
    @Param('slug') slug: string,
  ): Promise<CategoryInterface> {
    return await this.categoryService.getCategoryBySlug(slug);
  }

  @Post()
  async createCategory(
    @Body() category: CategoryToAddInterface,
  ): Promise<void> {
    await this.categoryService.addCategories([category]);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: number,
    @Body() category: CategoryInterface,
  ): Promise<void> {
    await this.categoryService.updateCategory(id, category);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    await this.categoryService.deleteCategory(id);
  }
}
