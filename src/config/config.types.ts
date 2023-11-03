import Joi, { StrictSchemaMap } from 'joi';

type DB_SCHEMA_TYPE = {
  DB_PROVIDER: 'postgresql' | 'mysql' | 'mongodb' | 'sqlite' | 'mongodb';
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_LOGGING: boolean;
  DATABASE_URL: string;
};

export type PrismaConfigType = {
  PROVIDER: string;
  URL: string;
};

export const CONFIG_DB_SCHEMA: StrictSchemaMap<DB_SCHEMA_TYPE> = {
  DB_PROVIDER: Joi.string().required().valid('postgres', 'sqlite'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number()
    .integer()
    .when('DB_PROVIDER', { is: 'postgresql', then: Joi.required() }),
  DB_USERNAME: Joi.string().when('DB_PROVIDER', {
    is: 'postgresql',
    then: Joi.required(),
  }),
  DB_PASSWORD: Joi.string().when('DB_PROVIDER', {
    is: 'postgresql',
    then: Joi.required(),
  }),
  DB_DATABASE: Joi.string().when('DB_PROVIDER', {
    is: 'postgresql',
    then: Joi.required(),
  }),
  DB_LOGGING: Joi.boolean().required(),
  DATABASE_URL: Joi.string().required(),
};

export type CONFIG_SCHEMA_TYPE = DB_SCHEMA_TYPE;
