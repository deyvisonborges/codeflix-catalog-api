import { BaseRepositoryTypes } from './base.repository.type';

class StubEntity {
  id?: string;
}

export abstract class InMemoryRepository<E extends StubEntity>
  implements BaseRepositoryTypes<E>
{
  items: E[] = [];

  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }

  async createMany(entity: E[]): Promise<void> {
    this.items.push(...entity);
  }

  async update(entity: E): Promise<void> {
    const indexFound = this.items.findIndex((item) => item.id === entity.id);
    if (indexFound === -1) throw new Error(`Entity not found`);
    this.items[indexFound] = entity;
  }

  async delete(entityId: string): Promise<void> {
    const indexFound = this.items.findIndex((item) => item.id === entityId);
    if (indexFound === -1) throw new Error(`Entity not found`);
    this.items.splice(indexFound, 1);
  }

  async findById(entityId: string): Promise<E> {
    const item = this.items.find((item) => item.id === entityId);
    return typeof item === 'undefined' ? null : item;
  }

  async findAll(): Promise<E[]> {
    return this.items;
  }

  getEntity(): new (...args: any[]) => E {
    throw new Error('Method not implemented.');
  }
}
