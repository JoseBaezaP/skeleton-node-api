import { Dialect } from "sequelize/types/sequelize";

export const config = {
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
    storage: process.env.DB_DIALECT === 'sqlite' ? './db.sqlite' : null,
    logging: false,
    dialectOptions: {
      useUTC: false,
      ssl: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
    },
  },
};