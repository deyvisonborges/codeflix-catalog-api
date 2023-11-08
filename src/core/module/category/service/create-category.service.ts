import { BaseService } from '../../../shared/service/base.service';
import { CategoryRepository } from '../repository/category.repository';
import { CategoryModel, CategoryProps } from '../category.model';
import { Category } from '@prisma/client';

export type CreateCategoryInput = CategoryProps;
export type CreateCategoryOutput = CategoryProps;

export class CreateCategoryService
  implements BaseService<CreateCategoryInput, CreateCategoryOutput>
{
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute(input: CreateCategoryInput): Promise<CreateCategoryOutput> {
    const entity = CategoryModel.create({ ...input });

    const mapper: Category = {
      id: entity.id,
      name: entity.name,
      created_at: entity.createdAt,
      description: entity.description,
      updated_at: entity.updatedAt,
    };
    await this.categoryRepo.insert(mapper);
    return { ...entity } as CreateCategoryOutput;
  }
}
