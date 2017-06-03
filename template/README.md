# {{ name }}

> {{ description }}

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

{{#testing unit e2e}}
# run {{#unit}}unit{{/unit}}{{#unit}}{{#e2e}} & {{/e2e}}{{/unit}}{{#e2e}}end-to-end{{/e2e}} tests
npm test

{{/testing}}

{{#if eslint}}
# lint all JS/Vue component files in `src/`
npm run lint

{{/if}}
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
