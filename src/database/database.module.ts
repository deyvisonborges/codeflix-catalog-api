import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

// WIP: Melhorar essa parte de mapeamento me baseando em ORM
@Module({
  imports: [PrismaModule],
})
export class DatabaseModule {}
