#! /bin/sh

cd client;
yarn;
yarn build;
rm -rf node_modules;
