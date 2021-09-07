'use strict';

const { join } = require('path');
const render = require('./tools/render');

const localPath = join(__dirname, 'dist', 'index.html');

const run = async () => {
  try {
    await render({
      url: `file://${localPath}`,
      destination: join(__dirname, 'dist')
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
