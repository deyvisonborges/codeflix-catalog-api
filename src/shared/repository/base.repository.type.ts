export interface BaseRepositoryTypes<E> {
  insert(entity: E): Promise<void>;
  createMany(entity: E[]): Promise<void>;
  update(entity: E): Promise<void>;
  delete(entityId: string): Promise<void>;
  findById(entityId: string): Promise<E | null>;
  findAll(): Promise<E[]>;

  // More generics interfaces
  /** @link https://github.com/prisma/prisma/discussions/3929 */
  // aggregate?: ()
  // findMany?: ()
  // updateMany?: ()
  // upinsert?: ()
}

export interface SearchableRepository<E, SearchInput, SearchOutput>
  extends BaseRepositoryTypes<E> {
  sortableFields: string[];
  search(props: SearchInput): Promise<SearchOutput>;
}
