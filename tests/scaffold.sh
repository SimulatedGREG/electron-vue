#!/bin/bash

# Scaffold boilerplate with default options
cd "$PWD/tests"
node scaffold.js

# Install dependecies
cd "$PWD/builds/default"
npm install

# Run webpack to check for bundling errors
npm run pack
