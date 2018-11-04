#! /bin/sh

cd client;
yarn install --production=false;
yarn build;
rm -rf node_modules;
