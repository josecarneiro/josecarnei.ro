'use strict';

const environment = process.env.NODE_ENV || 'production';

module.exports = {
  port: process.env.PORT || 3030,
  analytics: process.env.GOOGLE_ANALYTICS_KEY,
  env: environment,
  environment,
  maxWorkers: process.env.MAX_CLUSTER_WORKERS,
  database: {
    url: process.env.MONGODB_URI || process.env.MONGOLAB_URI
  },
  adminKey: process.env.ADMIN_KEY,
  sendgrid: {
    key: process.env.SENDGRID_API_KEY,
    sender: process.env.EMAIL_SENDER
  },
  debug: process.env.DEBUG_MODE === 'true'
};
