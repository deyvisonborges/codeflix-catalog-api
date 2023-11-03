import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from 'src/config/config.types';

describe('PrismaService', () => {
  let service: PrismaService;
  let configService: ConfigService<EnvironmentVariables>; // Declare uma instância de ConfigService com o tipo genérico

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        {
          provide: ConfigService,
          useValue: {
            get: () => 'DB_URL', // Simule o método get para retornar a URL da sua DB
          },
        },
      ],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
    configService =
      module.get<ConfigService<EnvironmentVariables>>(ConfigService); // Obtenha a instância do ConfigService
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
