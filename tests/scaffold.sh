#!/bin/bash
set -e

# Scaffold boilerplate with given templateName
cd "$PWD/tests"
node scaffold.js "$1"

# Install dependecies
cd "$PWD/builds/$1"
npm install

# Run unit/e2e testing
npm test

# Run webpack and build electron
npm run build
