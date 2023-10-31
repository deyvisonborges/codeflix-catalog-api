import { CategoryModel } from '../../category.model';
import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository';
import { RetrieveAllCategories } from '../retrieve-all-categories.service';

describe(`Retrieve All Categories Unit Tests`, () => {
  let repo: CategoryInMemoryRepository;
  let service: RetrieveAllCategories;

  beforeEach(() => {
    repo = new CategoryInMemoryRepository();
    service = new RetrieveAllCategories(repo);
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
