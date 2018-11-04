'use strict';

const { env } = process;

const environment = env.NODE_ENV || 'production';

module.exports = {
  port: env.PORT || 3020,
  env: environment,
  environment,
  maxWorkers: env.MAX_CLUSTER_WORKERS ? parseInt(env.MAX_CLUSTER_WORKERS) : Infinity,
  debug: env.DEBUG_MODE === 'true',
  useMicroCache: env.ENABLE_MICRO_CACHE === 'true'
};
