# Getting Started
**NOTICE**

 electron-vue was built using node `v5.10.0` as electron `v1.0.1` uses this. I strongly recommend you use the same version of electron node and your local instance of node. This prevents potential issues related to installing native npm modules needing be built against electron. [**More info.**](http://electron.atom.io/docs/tutorial/using-native-node-modules/)

 You can check your node version by running `node -v`. If you need to change your node version, then I'd recommend using [creationix/nvm](https://github.com/creationix/nvm/blob/master/README.markdown).

## Setup
```
git clone https://github.com/SimulatedGREG/electron-vue
cd electron-vue
npm install
```

 #### NOTE

 When running `npm install`, a post install script is also executed, which will `npm install` inside the `app` directory, remove the `.git` repo, and add documentation files/folders to the `.gitignore`. You're welcome.
