import { BaseModelType } from 'src/shared/model/base.model';

export type CategoryModelType = {
  name: string;
  description: string | null;
} & BaseModelType;

export class CategoryModel implements CategoryModelType {
  name: string;
  description: string;
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;

  constructor(props: CategoryModelType) {
    this.createdAt.getTime();
    Object.assign(this, props);
  }
}
