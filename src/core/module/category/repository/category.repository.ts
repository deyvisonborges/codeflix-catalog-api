/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaService } from 'src/database/prisma/prisma.service';
import { BaseRepositoryTypes } from '../../../shared/repository/base.repository.type';
import { CategoryProps } from '../category.model';
import { baseMapper } from 'src/core/shared/util/response.mapper';

export class CategoryRepository implements BaseRepositoryTypes<CategoryProps> {
  constructor(private prismaService: PrismaService) {}

  async insert(entity: CategoryProps): Promise<void> {
    await this.prismaService.category.create({ data: entity });
  }

  createMany(entity: CategoryProps[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async update(entity: CategoryProps): Promise<void> {
    await this.prismaService.category.update({
      data: {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        created_at: entity.createdAt,
        updated_at: new Date(),
      },
      where: { id: entity.id },
    });
  }

  async delete(entityId: string): Promise<void> {
    const category = await this.prismaService.category.findFirst({
      where: { id: entityId },
    });

    if (!category) throw new Error(`Not found category with id ${entityId}}`);
    await this.prismaService.category.delete({
      where: { id: entityId },
    });
  }

  async findById(entityId: string): Promise<CategoryProps> {
    return await this.prismaService.category.findFirst({
      where: { id: entityId },
    });
  }

  async findAll(): Promise<CategoryProps[]> {
    return await this.prismaService.category.findMany();
  }
}
