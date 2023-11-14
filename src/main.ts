import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WrapperDataInterceptor } from './interceptors/wrapper-data/wrapper-data.interceptor';
import { NotFoundFilter } from './filters/not-found/not-found.filter';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  enableSwagger(app);

  app.useGlobalInterceptors(new WrapperDataInterceptor());
  app.useGlobalFilters(new NotFoundFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();

function enableSwagger(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle(`Documentação com Swagger`)
    .setDescription(`Uma descrição de exemplo`)
    .setVersion(`1.0`)
    .addTag(`categories`)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api`, app, document);
}
