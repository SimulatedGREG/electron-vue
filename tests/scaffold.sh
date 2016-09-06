#!/bin/bash

# Scaffold boilerplate with given templateName
cd "$PWD/tests"
node scaffold.js "$1"

# Install dependecies
cd "$PWD/builds/$1"
npm install

# Run webpack to check for bundling errors
npm run pack
