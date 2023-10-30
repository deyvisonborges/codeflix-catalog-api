import { BaseService } from 'src/shared/service/base.service';
import { CategoryProps } from '../category.model';
import { UUID } from 'src/shared/model/uuid.model';
import { CategoryRepository } from '../repository/category.repository';

type Input = Required<Pick<CategoryProps, `id`>>;
type Output = void;

export class DeleteCategoryService implements BaseService<Input, Output> {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(input: Input): Promise<Output> {
    const uuid = new UUID(input.id);
    await this.categoryRepo.delete(uuid.toString());
  }
}
