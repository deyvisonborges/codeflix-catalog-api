import { CreateCategoryInput } from '../../../core/module/category/service/create-category.service';

export class CreateCategoryDto implements CreateCategoryInput {
  name: string;
  description: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}
