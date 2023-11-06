import { PrismaService } from 'src/database/prisma/prisma.service';
import { BaseRepositoryTypes } from '../../../shared/repository/base.repository.type';
import { CategoryModel, CategoryProps } from '../category.model';

export class CategoryRepository implements BaseRepositoryTypes<CategoryProps> {
  constructor(private prismaService: PrismaService) {}

  async insert(entity: CategoryModel): Promise<void> {
    await this.prismaService.category.create({ data: entity });
  }

  createMany(entity: CategoryModel[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(entity: CategoryModel): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(entityId: string): Promise<CategoryModel> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<CategoryProps[]> {
    return await this.prismaService.category.findMany();
  }
}
