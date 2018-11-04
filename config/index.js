'use strict';

const environment = process.env.NODE_ENV || 'production';

module.exports = {
  port: process.env.PORT || 3020,
  env: environment,
  environment,
  maxWorkers: process.env.MAX_CLUSTER_WORKERS,
  debug: process.env.DEBUG_MODE === 'true',
  useMicroCache: environment === 'production'
};
