import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryInput } from '../../../core/module/category/service/create-category.service';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto implements CreateCategoryInput {
  @ApiProperty({
    description: `O nome é usado para identificar a categoria`,
    example: `Ficcão Científica`,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;
}
