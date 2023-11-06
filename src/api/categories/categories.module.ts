import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { RetrieveAllCategoriesService } from 'src/core/module/category/service/retrieve-all-categories.service';
import { CategoryRepository } from 'src/core/module/category/repository/category.repository';
import { CreateCategoryService } from 'src/core/module/category/service/create-category.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    {
      provide: CreateCategoryService,
      useFactory: (repo: CategoryRepository) => {
        return new CreateCategoryService(repo);
      },
    },
    {
      provide: RetrieveAllCategoriesService,
      useFactory: (repo: CategoryRepository) => {
        return new RetrieveAllCategoriesService(repo);
      },
    },
  ],
})
export class CategoriesModule {}
