import { BaseRepositoryTypes } from '../../../shared/repository/base.repository.type';
import { CategoryModel } from '../category.model';

export class CategoryRepository implements BaseRepositoryTypes<CategoryModel> {
  insert(entity: CategoryModel): Promise<void> {
    throw new Error('Method not implemented.');
  }

  createMany(entity: CategoryModel[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(entity: CategoryModel): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(entityId: string): Promise<CategoryModel> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<CategoryModel[]> {
    throw new Error('Method not implemented.');
  }
}
