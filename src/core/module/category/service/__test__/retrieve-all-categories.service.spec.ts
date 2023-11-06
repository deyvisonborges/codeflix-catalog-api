import { PrismaService } from 'src/database/prisma/prisma.service';
import { CategoryModel } from '../../category.model';
import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository';
import { CategoryRepository } from '../../repository/category.repository';
import { RetrieveAllCategoriesService } from '../retrieve-all-categories.service';
import { ConfigService } from '@nestjs/config';

describe(`Retrieve All Categories Unit Tests`, () => {
  let repo: CategoryInMemoryRepository;
  let service: RetrieveAllCategoriesService;

  beforeEach(() => {
    repo = new CategoryInMemoryRepository();
    service = new RetrieveAllCategoriesService(
      new CategoryRepository(new PrismaService(new ConfigService())),
    );
  });

  it(`should return a list of categories`, async () => {
    await repo.insert(
      new CategoryModel({
        name: `fake name 001`,
        description: `fake description`,
      }),
    );

    await repo.insert(
      new CategoryModel({
        name: `fake name 002`,
        description: `fake description`,
      }),
    );

    await service.execute({});
  });
});
