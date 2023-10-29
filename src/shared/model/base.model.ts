export type BaseModelType = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
};

export abstract class BaseModel {
  abstract get id(): string;
}
