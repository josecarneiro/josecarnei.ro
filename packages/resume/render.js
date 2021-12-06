'use strict';

const { join } = require('path');
const render = require('./tools/render');

const distPath = join(__dirname, 'dist');
const localPath = join(distPath, 'index.html');

const run = async () => {
  try {
    await render({
      url: `file://${localPath}`,
      destination: distPath
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
