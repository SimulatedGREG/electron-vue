# Testing

electron-vue supports both unit testing and end-to-end testing for the `renderer` process and is heavily inspired by the testing setup provided with the official `vuejs-templates/webpack` boilerplate. During `vue-cli` scaffolding you will have the option to include testing support.

## [Unit testing](unittesting.md)

Run unit tests with Karma + Mocha

```bash
npm run unit
```

## [End-to-end testing](end-to-end_testing.md)

Run end-to-end tests with Spectron + Mocha

```bash
npm run e2e
```

## Running all tests

```bash
npm test
```

### On the subject of CI testing

If your decided to use `electron-builder` as your build tool when scaffolding, then you can easily test your application on both Travis CI & AppVeyor for `darwin`, `linux`, and `win32`. Inside both `.travis.yml` and `appveyor.yml` you will find commented sections you can quickly un-comment to enable testing. Make sure to read up on [**Automated Deployments using CI**](/using-electron-builder.md#automated-deployments-using-ci)** **for further information.

