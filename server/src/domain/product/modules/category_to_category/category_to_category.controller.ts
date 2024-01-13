import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryToCategoryService } from './category_to_category.service';
import { ProductInterface } from '../../product.domain.interface';
import { ROUTES } from '../../product.domain.registry';

@Controller(ROUTES.CATEGORIES_TO_CATEGORIES.BASE)
export class CategoryToCategoryController {
  constructor(private categoryToCategoryService: CategoryToCategoryService) {}

  @Get('category/:category_id')
  async getSubcategoriesOfCategory(
    @Param('category_id') category_id: number,
  ): Promise<ProductInterface[]> {
    return await this.categoryToCategoryService.getCategoriesOfCategory(
      category_id,
    );
  }

  @Post('/category/:category_id/subcategory/:subcategory_id')
  async addProductToCategory(
    @Param('category_id') category_id: number,
    @Param('subcategory_id') subcategory_id: number,
  ): Promise<void> {
    await this.categoryToCategoryService.addCategoryToCategory(
      category_id,
      subcategory_id,
    );
  }

  @Delete('/category/:category_id/subcategory/:subcategory_id')
  async deleteProductCategory(
    @Param('category_id') category_id: number,
    @Param('subcategory_id') subcategory_id: number,
  ): Promise<void> {
    await this.categoryToCategoryService.deleteCategoryFromCategory(
      category_id,
      subcategory_id,
    );
  }
}
