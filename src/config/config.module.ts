import { Module } from '@nestjs/common';
import {
  ConfigModuleOptions,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import { join } from 'path';
@Module({})
export class ConfigModule extends NestConfigModule {
  constructor() {
    super();
    console.log(process.cwd(), `envs`, `.env`);
  }
  static forRoot(options?: ConfigModuleOptions) {
    return super.forRoot({
      isGlobal: true,
      envFilePath: [
        ...(Array.isArray(options?.envFilePath)
          ? options?.envFilePath
          : [options?.envFilePath]),
        join(process.cwd(), `envs`, `.env.${process.env.NODE_ENV}`),
        join(process.cwd(), `envs`, `.env`),
      ],
      ...options,
    });
  }
}
