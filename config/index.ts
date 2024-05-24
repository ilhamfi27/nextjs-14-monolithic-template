export const config = {
  appEnv: process.env.APP_ENV ?? 'development',
  appName: process.env.APP_NAME ?? 'nextjs-monolithic-boilerplate',
  db: {
    type: 'mysql',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '') ?? 3306,
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME,
    maxPoolConnection: process.env.DB_MAX_POOL_CONNECTION ?? 10,
  },
  jwtSecret: process.env.JWT_SECRET ?? 'super-secret-jwt-key',

  /**
   * this config is used in the front-end
   * some of them might be same with the backend config
   *
   * becareful do not expose sensitive data here
   */
  appConfig: {},
};
