import { UUID } from '../../../shared/model/uuid.model';
import { BaseService } from '../../../shared/service/base.service';
import { CategoryProps } from '../category.model';
import { CategoryRepository } from '../repository/category.repository';

type Input = Required<Pick<CategoryProps, `id`>>;
type Output = CategoryProps;

export class RetrieveASingleCategory implements BaseService<Input, Output> {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(input: Input): Promise<Output> {
    const uuid = new UUID(input.id);
    const category = await this.categoryRepo.findById(uuid.toString());

    if (!category) {
      throw new Error(`Not found category with uuid: ` + input.id);
    }

    return {
      id: category.id,
      name: category.name,
      description: category.description,
      isActive: category.isActive,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    } as Output;
  }
}
