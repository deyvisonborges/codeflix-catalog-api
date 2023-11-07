import { SearchParamsProps } from 'src/core/shared/repository/search-params';
import { BaseService } from '../../../shared/service/base.service';
import { CategoryRepository } from '../repository/category.repository';
import { CategoryProps } from '../category.model';

type Input = SearchParamsProps;
type Output = { items: CategoryProps[] };

export class RetrieveAllCategoriesService
  implements BaseService<Input, Output>
{
  constructor(private categoryRepo: CategoryRepository) {}

  // WIP: adicionar paginacao e filtros no futuro
  async execute(input: Input): Promise<Output> {
    const searchResult = await this.categoryRepo.findAll();
    return {
      items: searchResult,
    };
  }
}
