import { UpdateCategoryInput } from 'src/core/module/category/service/update-category.service';

export class UpdateCategoryDto implements UpdateCategoryInput {
  name?: string;
  description?: string;
  id: string;
  isActive?: boolean;
}
