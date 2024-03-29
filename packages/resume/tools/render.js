'use strict';

const { join } = require('path');
const { readFileSync: readFile } = require('fs');
const puppeteer = require('puppeteer');

const loadData = (url) =>
  readFile(join(__dirname, '../out', url.replace('file://', '')), 'utf-8');

const render = async ({ url, destination }, { debug, ...options } = {}) => {
  let browser;
  try {
    // await mkdirp(destination);
    browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      ...(debug && { headless: false, slowMo: 200 }),
      ...options
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      console.log(url);
      if (url.startsWith('file://') && url.endsWith('.css')) {
        const css = loadData(url);
        return req.respond({
          status: 200,
          contentType: 'text/css',
          body: css
        });
      }
      req.continue();
    });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const title = await page.title();
    const filename = `${title}.pdf`;
    await page.pdf({
      path: join(destination, filename),
      format: 'A4',
      printBackground: true
    });
  } catch (error) {
    console.log('Error');
    console.log(error);
    await browser.close();
    throw error;
  } finally {
    await browser.close();
  }
};

const distPath = join(__dirname, '..', 'out');
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
