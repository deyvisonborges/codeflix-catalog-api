import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository';
import { CreateCategoryService } from '../create-category.service';

describe(`Create category - use case`, () => {
  let repository: CategoryInMemoryRepository;
  let service: CreateCategoryService;

  beforeEach(() => {
    repository = new CategoryInMemoryRepository();
    service = new CreateCategoryService(repository);
  });

  it(`should create a category`, async () => {
    const spyInsert = jest.spyOn(repository, `insert`);

    let output = await service.execute({
      name: `Some name`,
      description: `Some description`,
    });

    // Espero que o metodo insert seja chamado uma vez
    expect(spyInsert).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      name: `Some name`,
      description: `Some description`,
      isActive: true,
      createdAt: repository.items[0].createdAt,
    });

    output = await service.execute({
      name: `Other name`,
      description: `Other description`,
      isActive: false,
    });

    expect(spyInsert).toHaveBeenCalledTimes(2);
    expect(output).toStrictEqual({
      id: repository.items[1].id,
      name: `Other name`,
      description: `Other description`,
      isActive: false,
      createdAt: repository.items[1].createdAt,
    });
  });
});
