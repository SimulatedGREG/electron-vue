# Migration Guide

The following documentation attempts to explain how migrating your project _should_ be accomplished, but may not be a full proof method as overall project structure is always up for change.

1. Scaffold a fresh version of electron-vue using `vue init simulatedgreg/electron-vue my-project`
2. Copy over current project `src` files into the new scaffold's `src` directory
3. Copy over `package.json` dependencies from current project to the new scaffold's `package.json`
4. Install dependencies with `yarn` or `npm install`
5. Run project in development mode \(`yarn run dev` or `npm run dev`\)
6. Watch console for errors to fix

Just as previously mentioned above, there isn't a full proof method for migrating to a new scaffold, but these are typically going to be the major steps to get you nearly all the way there. Any personal modifications to project structure or handling of assets will be up to you or your team to migrate. Make sure to check out the rest of the documentation as it will always reflect the current version of electron-vue from the `master` branch.

