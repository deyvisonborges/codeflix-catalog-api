import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { RetrieveAllCategoriesService } from 'src/core/module/category/service/retrieve-all-categories.service';
import { CategoryRepository } from 'src/core/module/category/repository/category.repository';
import { CreateCategoryService } from 'src/core/module/category/service/create-category.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { DeleteCategoryService } from 'src/core/module/category/service/delete-category.service';
import { RetrieveASingleCategory } from 'src/core/module/category/service/retrieve-a-single-category.service';
import { UpdateCategoryService } from 'src/core/module/category/service/update-category.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [
    {
      provide: CategoryRepository,
      useFactory: (prismaService: PrismaService) => {
        return new CategoryRepository(prismaService);
      },
      inject: [PrismaService], //  o inject sao as dependencias da factory () =>,
    },
    {
      provide: CreateCategoryService,
      useFactory: (repo: CategoryRepository) => {
        return new CreateCategoryService(repo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: RetrieveAllCategoriesService,
      useFactory: (repo: CategoryRepository) => {
        return new RetrieveAllCategoriesService(repo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: DeleteCategoryService,
      useFactory: (repo: CategoryRepository) => {
        return new DeleteCategoryService(repo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: RetrieveASingleCategory,
      useFactory: (repo: CategoryRepository) => {
        return new RetrieveASingleCategory(repo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: UpdateCategoryService,
      useFactory: (repo: CategoryRepository) => {
        return new UpdateCategoryService(repo);
      },
      inject: [CategoryRepository],
    },
  ],
})
export class CategoriesModule {}
