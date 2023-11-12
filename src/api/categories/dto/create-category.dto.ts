import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryInput } from '../../../core/module/category/service/create-category.service';

export class CreateCategoryDto implements CreateCategoryInput {
  @ApiProperty({
    description: `O nome é usado para identificar a categoria`,
    example: `Ficcão Científica`,
  })
  name: string;

  @ApiProperty()
  description: string;
}
