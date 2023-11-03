import { Test } from '@nestjs/testing';
import { DatabaseModule } from './database.module';
import { ConfigModule } from '../config/config.module';
import { getConfigToken } from '@nestjs/config';

describe(`Database Module Tests`, () => {
  describe(`sqlite connection`, () => {
    const configs = {
      DATABASE_URL: 'file:./local.sqlite',
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
      const connection = app.get(getConfigToken);
      expect(connection).toBeDefined();
    });
  });
});
