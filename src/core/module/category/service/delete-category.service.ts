import { BaseService } from '../../../shared/service/base.service';
import { CategoryProps } from '../category.model';
import { UUID } from '../../../shared/model/uuid.model';
import { CategoryRepository } from '../repository/category.repository';
import { NotFoundException } from '@nestjs/common';

type Input = Required<Pick<CategoryProps, `id`>>;
type Output = void;

export class DeleteCategoryService implements BaseService<Input, Output> {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async execute(input: Input): Promise<void> {
    const uuid = new UUID(input.id);
    const category = await this.categoryRepo.findById(uuid.toString());

    if (category === null) {
      throw new NotFoundException(
        `Not found category with uuid ${uuid.toString()}`,
      );
    }

    await this.categoryRepo.delete(uuid.toString());
  }
}
