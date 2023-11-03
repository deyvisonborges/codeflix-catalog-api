import Joi, { StrictSchemaMap } from 'joi';

export type PrismaConfigType = {
  DB_PROVIDER: 'postgresql' | 'mysql' | 'mongodb' | 'sqlite' | 'mongodb';
  DB_URL: string;
};

export const CONFIG_DB_SCHEMA: StrictSchemaMap<PrismaConfigType> = {
  DB_PROVIDER: Joi.string().required(),
  DB_URL: Joi.string().required(),
};

export type EnvironmentVariables = PrismaConfigType;
