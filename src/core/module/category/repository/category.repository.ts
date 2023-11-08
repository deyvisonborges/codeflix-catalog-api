import { PrismaService } from 'src/database/prisma/prisma.service';
import { BaseRepositoryTypes } from '../../../shared/repository/base.repository.type';
import { CategoryProps } from '../category.model';

export class CategoryRepository implements BaseRepositoryTypes<CategoryProps> {
  constructor(private prismaService: PrismaService) {}

  async insert(entity: CategoryProps): Promise<void> {
    await this.prismaService?.category.create({ data: entity });
  }

  createMany(entity: CategoryProps[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(entity: CategoryProps): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(entityId: string): Promise<CategoryProps> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<CategoryProps[]> {
    console.log(await this.prismaService?.category.findMany());
    return await this.prismaService?.category.findMany();
  }
}
