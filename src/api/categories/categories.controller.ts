import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
// import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';
import { RetrieveAllCategoriesService } from 'src/core/module/category/service/retrieve-all-categories.service';
import { CreateCategoryService } from 'src/core/module/category/service/create-category.service';

@Controller('categories')
export class CategoriesController {
  @Inject(CreateCategoryService)
  private createCategoryService: CreateCategoryService;

  @Inject(RetrieveAllCategoriesService)
  private retrieveAllCategoriesService: RetrieveAllCategoriesService;

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.createCategoryService.execute(createCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.retrieveAllCategoriesService.execute({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoriesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCategoryDto: UpdateCategoryDto,
  // ) {
  //   return this.categoriesService.update(+id, updateCategoryDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.categoriesService.remove(+id);
  // }
}
