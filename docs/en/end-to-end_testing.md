# End-to-End Testing

electron-vue makes use of [Spectron](http://electron.atom.io/spectron/) and the [Mocha](https://mochajs.org/) \(with [Chai](http://chaijs.com/)\) test framework for end-to-end testing. Mocha & Chai APIs, including `expect`, `should`, and `assert`, are made available in global scope.

### Running tests

```bash
# Begin Mocha
npm run e2e
```

##### Note

Before running end-to-end tests, a `npm run pack` is called to create a production build that Spectron can consume during tests.

### File Structure

```
my-project
├─ test
|  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ utils.js
```

**For the most part, you can ignore **`index.js`** and focus solely on writing **`specs/`**.**

#### `specs/`

Inside this directory is where actual tests are written. Thanks to the power of `babel-register`, you have full access to ES2015.

#### `index.js`

This file acts as the main entry to Mocha and gathers all tests written in `specs/` for testing.

#### `utils.js`

Here you will find generic functions that could be of use throughout your `specs/`. Base functions include a `beforeEach` and `afterEach` that handle the electron creation/destruction process.

### On the subject of Spectron

Spectron is the official [electron](http://electron.atom.io) testing framework that uses both [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) and [WebDriverIO](http://webdriver.io/) for manipulating DOM elements.

#### Using WebDriverIO

As stated in the Spectron [documentation](https://github.com/electron/spectron#client), access to [WebDriverIO APIs](http://webdriver.io/api.html) can be accessed through `this.app.client`. Since electron-vue uses Mocha, the context of `this` is shared between `afterEach`, `beforeEach`, and `it`. Because of this, it is important to note that ES2015 arrow functions cannot not be used in certain situations as the context of `this` will be overwritten \([more info](https://mochajs.org/#arrow-functions)\).

