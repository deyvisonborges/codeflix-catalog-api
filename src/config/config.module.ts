import { Module } from '@nestjs/common';
import {
  ConfigModuleOptions,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import Joi from 'joi';
import { join } from 'path';
import { CONFIG_DB_SCHEMA } from './config.types';
@Module({})
export class ConfigModule extends NestConfigModule {
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
      validationSchema: Joi.object({ ...CONFIG_DB_SCHEMA }),
      ...options,
    });
  }
}
