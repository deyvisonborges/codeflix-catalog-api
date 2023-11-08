import { CategoryInMemoryRepository } from 'src/core/module/category/repository/category.in-memory.repository';
import { CategoryRepository } from 'src/core/module/category/repository/category.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

export const CategoryProviders = {
  repositories: {
    categoryRepository: {
      provide: `CategoryRepository`,
      useExisting: CategoryRepository,
    },
    categoryInMemoryRepository: {
      provide: CategoryInMemoryRepository,
      useClass: CategoryInMemoryRepository,
    },
    categoryPrismaRepository: {
      provide: {},
      useFactory: (prismaService: PrismaService) => {
        return new CategoryRepository(prismaService);
      },
      inject: [PrismaService],
    },
  },
  services: {},
};
