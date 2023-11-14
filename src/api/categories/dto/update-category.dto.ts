import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { UpdateCategoryInput } from 'src/core/module/category/service/update-category.service';

export class UpdateCategoryDto implements UpdateCategoryInput {
  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  id: string;

  @IsBoolean()
  isActive?: boolean;
}
