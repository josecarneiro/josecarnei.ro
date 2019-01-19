'use strict';

const { env } = process;

const environment = env.NODE_ENV || 'production';

module.exports = {
  port: env.PORT || 3020,
  env: environment,
  environment,
  maxWorkers: env.MAX_CLUSTER_WORKERS ? parseInt(env.MAX_CLUSTER_WORKERS) : Infinity,
  debug: env.DEBUG === 'true',
  useMicroCache: env.ENABLE_MICRO_CACHE === 'true',
  cacheDuration: 365 * 24 * 60 * 60,
  cacheMimeTypes: [ 'application/javascript', 'text/css', 'image/png', 'image/jpeg', 'image/svg+xml', 'video/mp4', 'font/otf', 'font/ttf', 'font/woff', 'font/woff2' ]
};
