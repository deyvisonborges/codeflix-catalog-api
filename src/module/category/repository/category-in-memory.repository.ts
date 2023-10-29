import { InMemoryRepository } from '../../../shared/repository/in-memory.repository';
import { CategoryModel } from '../category.model';

export class CategoryInMemoryRepository extends InMemoryRepository<CategoryModel> {}
