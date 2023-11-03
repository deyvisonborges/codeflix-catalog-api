import { Test } from '@nestjs/testing';
import { DatabaseModule } from './database.module';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Importe o ConfigModule, ConfigService e getConfigToken

describe(`Database Module Tests`, () => {
  describe(`sqlite connection`, () => {
    const configs = {
      DB_URL: 'file:./local.sqlite',
    };

    it(`should be a sqlite connection`, async () => {
      const module = await Test.createTestingModule({
        imports: [
          DatabaseModule,
          ConfigModule.forRoot({
            isGlobal: true,
            ignoreEnvFile: true,
            ignoreEnvVars: true,
            validationSchema: null,
            load: [() => configs],
          }),
        ],
      }).compile();

      const app = module.createNestApplication();
      const configService = app.get<ConfigService>(ConfigService); // Obtenha o ConfigService
      const connection = configService.get<string>('DB_URL'); // Obtenha a configuração 'DB_URL' do ConfigService
      expect(connection).toBeDefined();
    });
  });
});
