import { BaseModel } from '../model/base.model';

export type SortDirection = `asc` | `desc`;

export type SearchParamsProps<Filter = string> = {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
};

export class SearchParams<Filter = string> extends BaseModel {
  get id(): string {
    throw new Error('Method not implemented.');
  }
}
