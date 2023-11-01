import { InvalidUuidError, UUID } from '../../../../shared/model/uuid.model';
import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository';
import { DeleteCategoryService } from '../delete-category.service';
import { CategoryModel } from '../../category.model';

describe('Delete category case', () => {
  let repository: CategoryInMemoryRepository;
  let service: DeleteCategoryService;

  beforeEach(() => {
    repository = new CategoryInMemoryRepository();
    service = new DeleteCategoryService(repository);
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

  it('should delete a category', async () => {
    const category = new CategoryModel({
      name: `fake name`,
      description: `fake description`,
    });
    await repository.insert(category);
    await service.execute({ id: category.id });

    const noHasModel = await repository.findById(category.id);
    expect(noHasModel).toBeNull();
  });
});
