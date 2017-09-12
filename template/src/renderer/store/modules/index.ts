/**
 * The file enables `@/store/index.ts` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

// eslint-disable

const files = require.context('.', false, /\.ts$/)
const modules = {} as any

files.keys().forEach(key => {
  if (key === './index.ts') return
  modules[key.replace(/(\.\/|\.ts)/g, '')] = (files(key) as any).default
})

export default modules
