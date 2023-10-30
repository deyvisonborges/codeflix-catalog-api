import { BaseService } from '../../../shared/service/base.service';
import { CategoryRepository } from '../repository/category.repository';
import { CategoryModel, CategoryProps } from '../category.model';

type CategoryInput = CategoryProps;
type CategoryOutput = CategoryProps;

export class CreateCategoryService
  implements BaseService<CategoryInput, CategoryOutput>
{
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute(input: CategoryInput): Promise<CategoryOutput> {
    const entity = CategoryModel.create({ ...input });
    await this.categoryRepo.insert(entity);
    return { ...entity } as CategoryOutput;
  }
}
