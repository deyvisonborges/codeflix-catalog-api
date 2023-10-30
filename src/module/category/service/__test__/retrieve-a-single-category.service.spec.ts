import { InvalidUuidError, UUID } from '../../../../shared/model/uuid.model';
import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository';
import { CategoryModel } from '../../category.model';
import { RetrieveASingleCategory } from '../retrieve-a-single-category.service';

describe('Retrieve a single category case', () => {
  let repository: CategoryInMemoryRepository;
  let service: RetrieveASingleCategory;

  beforeEach(() => {
    repository = new CategoryInMemoryRepository();
    service = new RetrieveASingleCategory(repository);
  });

  it('should throws error when entity not found', async () => {
    await expect(() => service.execute({ id: `fake id` })).rejects.toThrow(
      new InvalidUuidError(),
    );

    const uuid = new UUID();
    await expect(async () =>
      service.execute({ id: uuid.toString() }),
    ).rejects.toThrow(Error);
  });

  it('should returns a category', async () => {
    const category = new CategoryModel({
      name: `fake name`,
      description: `fake description`,
    });
    repository.items = [category];

    const spyFindById = jest.spyOn(repository, `findById`);
    const output = await service.execute({ id: category.id });

    expect(spyFindById).toHaveBeenCalledTimes(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      name: `fake name`,
      description: `fake description`,
      isActive: true,
      createdAt: repository.items[0].createdAt,
      updatedAt: repository.items[0].updatedAt,
    });
  });
});
