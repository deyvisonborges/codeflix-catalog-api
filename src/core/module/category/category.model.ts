import { BaseModelType } from '../../shared/model/base.model';
import { UUID } from '../../shared/model/uuid.model';

export type CategoryProps = {
  name: string;
  description: string | null;
} & BaseModelType;

export class CategoryModel implements CategoryProps {
  name: string;
  description: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;

  constructor(props: CategoryProps) {
    this.id = props.id || new UUID().toString();
    this.createdAt = props.createdAt ?? new Date();
    this.isActive = props.isActive ?? true;
    Object.assign(this, props);
  }

  changeProperty<K extends keyof this, V extends this[K]>(
    key: K,
    value: V,
  ): this {
    if (key in this) {
      this[key] = value;
    }
    return this;
  }

  static create(props: CategoryProps): CategoryModel {
    const category = new CategoryModel(props);
    return category;
  }
}
