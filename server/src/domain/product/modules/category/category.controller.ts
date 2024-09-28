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
import { CategoryService } from './category.service';
import {
  CategoryInterface,
  CategoryToAddInterface,
} from '../../product.domain.interface';
import { ROUTES } from '../../product.domain.registry';
import { PaginationRequestInterface } from '../../../../shared/interfaces/pagination';
import { ResponseInterface } from '../../../../shared/interfaces/response';
import { SortingInterface } from '../../../../shared/interfaces/sorting';

@Controller(ROUTES.CATEGORIES.BASE)
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async getCategories(
    @Query() pagination: PaginationRequestInterface,
    @Query() sorting: SortingInterface,
  ): Promise<ResponseInterface<CategoryInterface[]>> {
    console.log('controller pagination: ', pagination);
    console.log('controller sorting: ', sorting);

    return await this.categoryService.getCategories(pagination, sorting);
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
