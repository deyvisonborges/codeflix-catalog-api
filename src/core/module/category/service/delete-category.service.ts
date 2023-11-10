import { BaseService } from '../../../shared/service/base.service';
import { CategoryProps } from '../category.model';
import { UUID } from '../../../shared/model/uuid.model';
import { CategoryRepository } from '../repository/category.repository';

type Input = Required<Pick<CategoryProps, `id`>>;
type Output = void;

export class DeleteCategoryService implements BaseService<Input, Output> {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute(input: Input): Promise<void> {
    const uuid = new UUID(input.id);
    return await this.categoryRepo.delete(uuid.toString());
  }
}
