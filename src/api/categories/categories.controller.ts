import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  Delete,
  Param,
  HttpCode,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { RetrieveAllCategoriesService } from '../../core/module/category/service/retrieve-all-categories.service';
import { CreateCategoryService } from '../../core/module/category/service/create-category.service';
import { DeleteCategoryService } from '../../core/module/category/service/delete-category.service';
import { RetrieveASingleCategory } from 'src/core/module/category/service/retrieve-a-single-category.service';
import { UpdateCategoryService } from 'src/core/module/category/service/update-category.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(`Categories`)
@Controller('categories')
export class CategoriesController {
  @Inject(CreateCategoryService)
  private createCategoryService: CreateCategoryService;

  @Inject(RetrieveAllCategoriesService)
  private retrieveAllCategoriesService: RetrieveAllCategoriesService;

  @Inject(DeleteCategoryService)
  private deleteCategoryService: DeleteCategoryService;

  @Inject(RetrieveASingleCategory)
  private retrieveASingleCategory: RetrieveASingleCategory;

  @Inject(UpdateCategoryService)
  private updateCategoryService: UpdateCategoryService;

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.createCategoryService.execute(createCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.retrieveAllCategoriesService.execute({});
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(
    @Param(
      'id',
      new ParseUUIDPipe({
        errorHttpStatusCode: 422,
      }),
    )
    id: string,
  ) {
    return await this.deleteCategoryService.execute({ id: id });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retrieveASingleCategory.execute({
      id: id,
    });
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe({ errorHttpStatusCode: 422 })) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.updateCategoryService.execute({
      id: id,
      ...updateCategoryDto,
    });
  }
}
