# electron-vue
> The boilerplate for making electron apps using vue (pretty much what it sounds like).

**This project is still in development. Check the TODO's below for future plans.**

## Overview
The aim of this project is to remove the need to setup electron apps using vue. Since vue can take advantage of module loaders like webpack, getting everything to play nicely can be a little tricky.

This boilerplate comes pre-packaged with vue-router, vue-resource, and vuex.

## Let's get started
FYI, this project was built using node v5.10.0. You can check your node version by running `node -v`. If you need to change your node version, then I'd recommend using [creationix/nvm](https://github.com/creationix/nvm/blob/master/README.markdown).

### Setup
```bash
git clone https://github.com/SimulatedGREG/electron-vue
cd electron-vue
npm i
```

### Starting the app in development
```bash
npm run dev
```

## TODO
  1. ~~Ability to create electron builds for all platforms~~
  2. Show eslint errors in browser
  3. Create documentation explaining the use of both `package.json` files
  4. Create script to compile npm modules that are needed to build against electron
  5. Get Vue devtools working
  6. (more)

***

## License
The MIT License (MIT)

Copyright (c) 2016 Greg Holguin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
