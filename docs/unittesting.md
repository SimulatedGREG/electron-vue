# Unit testing

electron-vue makes use of the [Karma](https://karma-runner.github.io/1.0/index.html) test runner and the [Jasmine](http://jasmine.github.io/2.5/introduction.html) test framework for unit testing.

### Running tests
```bash
# Begins Karma
npm run unit
```

### File Structure
```
my-project
├─ test
|  ├─ unit
│  │  ├─ specs
│  │  │  └─ LandingPageView.spec.js
│  │  ├─ index.js
│  │  └─ karma.conf.js
```

**For the most part, you can ignore both `index.js` and `karma.conf.js` and focus solely on writing `specs/`.**

#### `specs/`
Inside this directory is where actual tests are written. Thanks to the power of webpack, you have full access to ES2015 and supported loaders.

#### `index.js`
This is the entry file used by `karma-webpack`. The purpose of this file is to gather all test and source code in a "one-shot" manner.

#### `karma.conf.js`
Here you will find the actual `karma` configuration, set up with spec/coverage reporters. Further customization can be made in accordance to the [official karma documentation](http://karma-runner.github.io/1.0/config/configuration-file.html).