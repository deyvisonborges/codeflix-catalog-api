// import { BaseService } from '../../../shared/service/base.service';
// import { CategoryProps } from '../category.model';
// import { UUID } from '../../../shared/model/uuid.model';
// import { CategoryRepository } from '../repository/category.repository';

// type UpdateCategoryInput = Partial<CategoryProps> & { id: string };
// type UpdateCategoryOutput = CategoryProps;

// export class UpdateCategoryService
//   implements BaseService<UpdateCategoryInput, UpdateCategoryOutput>
// {
//   constructor(private categoryRepo: CategoryRepository) {}

//   async execute(input: UpdateCategoryInput): Promise<UpdateCategoryOutput> {
//     const uuid = new UUID(input.id);
//     const category = await this.categoryRepo.findById(uuid.toString());

//     if (!category) {
//       throw new Error(`Not found category with id: ` + input.id);
//     }

//     input.name && category.changeProperty(`name`, input.name);

//     if ('description' in input) {
//       category.changeProperty(`description`, input.description);
//     }

//     if (input.isActive === true) {
//       category.changeProperty(`isActive`, true);
//     }

//     if (input.isActive === false) {
//       category.changeProperty(`isActive`, false);
//     }

//     await this.categoryRepo.update(category);

//     // return responseMapper<UpdateCategoryOutput>({
//     //   id: category.id,
//     //   description: category.description,
//     //   name: category.name,
//     //   isActive: category.isActive,
//     //   createdAt: category.createdAt,
//     // });

//     return {
//       id: category.id,
//       description: category.description,
//       name: category.name,
//       isActive: category.isActive,
//       createdAt: category.createdAt,
//     };
//   }
// }
