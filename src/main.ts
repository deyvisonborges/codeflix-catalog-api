import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WrapperDataInterceptor } from './interceptors/wrapper-data/wrapper-data.interceptor';
import { NotFoundFilter } from './filters/not-found/not-found.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrapperDataInterceptor());
  app.useGlobalFilters(new NotFoundFilter());
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
