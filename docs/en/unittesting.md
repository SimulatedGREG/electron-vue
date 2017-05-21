# Unit Testing

electron-vue makes use of the [Karma](https://karma-runner.github.io/1.0/index.html) test runner and the [Mocha](https://mochajs.org/) test framework \(with [Chai](http://chaijs.com/)\) for unit testing.

Both Mocha and Chai are integrated using `karma-mocha` and `karma-chai` respectively, so all APIs such as `expect` are globally available in test files.

### Running Tests

```bash
# Begin Karma
npm run unit
```

### File Structure

```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ karma.conf.js
```

**For the most part, you can ignore both **`index.js`** and **`karma.conf.js`** and focus solely on writing **`specs/`**.**

#### `specs/`

Inside this directory is where actual tests are written. Thanks to the power of webpack, you have full access to ES2015 and supported loaders.

#### `index.js`

This is the entry file used by `karma-webpack`. The purpose of this file is to gather all test and source code in a "one-shot" manner.

#### `karma.conf.js`

Here you will find the actual `karma` configuration, set up with spec/coverage reporters. Further customization can be made in accordance to the [official karma documentation](http://karma-runner.github.io/1.0/config/configuration-file.html).

### Mocking Dependencies

electron-vue comes with [`inject-loader`](https://github.com/plasticine/inject-loader) installed by default. For usage with Vue component files see [`vue-loader` docs on testing with mocks](http://vue-loader.vuejs.org/en/workflow/testing-with-mocks.html).

