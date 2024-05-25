import { DataSourceOptions } from 'typeorm';
import { config } from '@/config';
import { resolve, join } from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: config.db.type as any,
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  entities: [],
  migrations: [resolve(join(__dirname, 'migrations/*.{ts,js}'))],
  synchronize: false,
  logger: 'simple-console',
  subscribers: [],
  poolSize: config.db.maxPoolConnection as number,
  charset: 'utf8mb4',
};
