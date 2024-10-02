import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
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
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../uploads/',
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      }),
    }),
  ) // INFO: Webstorm is being mistaken here
  async createCategory(
    @Body('category') category: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    @UploadedFile()
    file: Express.Multer.File,
  ): Promise<void> {
    // Parse the category string into an object
    const parsedCategory: CategoryToAddInterface = JSON.parse(category);

    console.log('file: ', file);

    // Use the service to handle category data
    await this.categoryService.addCategories([parsedCategory]);
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
