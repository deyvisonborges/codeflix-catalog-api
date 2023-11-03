import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigService } from '@nestjs/config';
import { CONFIG_SCHEMA_TYPE } from 'src/config/config.types';

// WIP: Melhorar essa parte de mapeamento me baseando em ORM
@Module({
  imports: [
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService<CONFIG_SCHEMA_TYPE>) => {
        const provider = configService.get('DB_PROVIDER');
        // console.log(provider);
        if (provider === 'sqlite') {
          return {
            prismaOptions: {
              datasources: {
                db: {
                  url: configService.get('DATABASE_URL'),
                },
              },
            },
          };
        }
        if (provider === 'postgresql') {
          return {
            prismaOptions: {
              datasources: {
                db: {
                  url: configService.get('DATABASE_URL'),
                },
              },
            },
          };
        }
        throw new Error(`Unsupported database config: ${provider}`);
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
