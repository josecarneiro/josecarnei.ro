'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
if (mongoose.pluralize && typeof mongoose.pluralize === 'function') mongoose.pluralize(null);

module.exports = class Database {
  constructor (options) {
    this._defaults = {};
    this._options = { ...this._defaults, ...options };
  }

  async initialize () {
    try {
      await this.connect();
    } catch (error) {
      throw error;
    }
  }

  async connect () {
    try {
      await mongoose.connect(this._options.url, {});
    } catch (error) {
      throw error;
    }
  }

  async close () {
    if (mongoose.connection.readyState !== 0) return;
    try {
      await mongoose.connection.close();
    } catch (error) {
      throw error;
    }
  }

  async cleanUp () {
    try {
      if (mongoose.connection.readyState === 0) await mongoose.connect(this._options.url, {});
      await mongoose.connection.dropDatabase();
      await mongoose.disconnect();
    } catch (error) {
      throw error;
    }
  };

  async cleanCollection (collection) {
    if (!mongoose.connection.collections[`${ collection }s`]) return;
    try {
      await mongoose.connection.collections[`${ collection }s`].drop();
    } catch (error) {
      throw error;
    }
  };
};
