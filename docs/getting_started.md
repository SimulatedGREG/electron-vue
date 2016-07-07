# Getting Started
**NOTICE**

 electron-vue was built using node `v5.10.0` as electron `v1.0.1` uses this, but in most cases all dependencies should work fine on newer versions. I strongly recommend you use the same version of electron's node and your local instance of node. This helps prevent potential issues related to installing native npm modules needing to be built against electron. [**More info.**](http://electron.atom.io/docs/tutorial/using-native-node-modules/)

 You can check your node version by running `node -v`. If you need to change your node version, then I'd recommend using [creationix/nvm](https://github.com/creationix/nvm/blob/master/README.markdown).
 
 
## Getting started
This boilerplate was built as a template for [vue-cli](https://github.com/vuejs/vue-cli) and includes options to customize your final scaffolded app.

```bash
# Install vue-cli and scaffold boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Install dependencies and run your app
cd my-project
npm install
npm run dev
```

#### NOTE

 When running `npm install` a post install script is also executed, which will `npm install` inside the `app` directory.