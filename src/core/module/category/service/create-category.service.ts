import { BaseService } from '../../../shared/service/base.service';
import { CategoryRepository } from '../repository/category.repository';
import { CategoryModel, CategoryProps } from '../category.model';

export type CreateCategoryInput = CategoryProps;
export type CreateCategoryOutput = CategoryProps;

export class CreateCategoryService
  implements BaseService<CreateCategoryInput, CreateCategoryOutput>
{
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(input: CreateCategoryInput): Promise<CreateCategoryOutput> {
    const entity = CategoryModel.create({ ...input });
    await this.categoryRepo?.insert(entity);
    return { ...entity } as CreateCategoryOutput;
  }
}
