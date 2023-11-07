import { CategoryProps } from 'src/core/module/category/category.model';

export class Category implements CategoryProps {
  name: string;
  description: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}
