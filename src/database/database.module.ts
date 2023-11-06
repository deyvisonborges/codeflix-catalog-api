import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

// WIP: Melhorar essa parte de mapeamento me baseando em ORM
@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true })],
})
export class DatabaseModule {}
