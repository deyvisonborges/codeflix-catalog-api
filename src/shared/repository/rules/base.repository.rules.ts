import { BaseModel } from 'src/shared/model/base.model';

export interface BaseRepositoryRules<E extends BaseModel> {
  insert(entity: E): Promise<void>;
  createMany(entity: E[]): Promise<void>;
  update(entity: E): Promise<void>;
  delete(entityId: string): Promise<void>;
  findById(entityId: string): Promise<E | null>;
  findAll(): Promise<E[]>;
  getEntity(): new (...args: any[]) => E;
}
