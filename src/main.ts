import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WrapperDataInterceptor } from './interceptors/wrapper-data/wrapper-data.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new WrapperDataInterceptor());
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
