import { InvalidUuidError, UUID } from '../../../shared/model/uuid.model';
import { CategoryModel } from '../category.model';
import { CategoryInMemoryRepository } from '../repository/category.in-memory.repository';
import { UpdateCategoryService } from '../service/update-category.service';

describe(`Update category use case`, () => {
  let repository: CategoryInMemoryRepository;
  let service: UpdateCategoryService;

  beforeEach(() => {
    repository = new CategoryInMemoryRepository();
    service = new UpdateCategoryService(repository);
  });

  it(`should throws error when entity not found`, async () => {
    await expect(() =>
      service.execute({ id: `fake id`, name: `fake name` }),
    ).rejects.toThrow(new InvalidUuidError());

    const uuid = new UUID();

    await expect(() =>
      service.execute({ id: uuid.toString(), name: `valid name` }),
    ).rejects.toThrow(
      new Error(`Not found category with id: ` + uuid.toString()),
    );
  });

  it(`should update a category`, async () => {
    const spyUpdate = jest.spyOn(repository, `update`);
    const category = new CategoryModel({
      name: `Movie`,
      description: `Movie description`,
    });
    repository.items = [category];

    const output = await service.execute({
      id: category.id,
      name: `mudei o nome`,
    });

    expect(spyUpdate).toHaveBeenCalledTimes(1);

    expect(output).toStrictEqual({
      id: category.id,
      name: `mudei o nome`,
      description: `Movie description`,
      isActive: true,
      createdAt: category.createdAt,
    });
  });
});
