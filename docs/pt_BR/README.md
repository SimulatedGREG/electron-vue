![](../images/logo.png)

> Um template para criar aplicações electron usando vue \(como o nome diz\).

[![Build Status](https://semaphoreci.com/api/v1/simulatedgreg/electron-vue/branches/master/badge.svg)](https://semaphoreci.com/simulatedgreg/electron-vue)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)

## Resumo

O foco do template é remover a nescessidade de criar manualmente todo a organização do projeto usando electron e o vue. electron-vue tira vantagem da `vue-cli` para receber arquivos, `webpack` com `vue-loader`, `electron-packager` ou `electron-builder`, e também os plugins mais utilizados como `vue-router`, `vuex` e muito mais.

#### De uma olhada na documentação em português [aqui](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Coisas que você vai achar no projeto...

* Estrutura basica de projeto, com arquivo um **unico** `package.json`
* [Documentação](https://simulatedgreg.gitbooks.io/electron-vue/content/) detalhada
* O projeto retira seus arquivos de vue da [vue-cli](https://github.com/vuejs/vue-cli)
* Pronto para uso de plugins de vue como \([axios](https://github.com/mzabriskie/axios), [vue-electron](https://github.com/SimulatedGREG/vue-electron), [vue-router](https://github.com/vuejs/vue-router), [vuex](https://github.com/vuejs/vuex)\)\*
* Instalado [vue-devtools](https://github.com/vuejs/vue-devtools) e [devtron](https://github.com/electron/devtron) ferramentas para desenvolvimento
* Habilidade para facilmente compilar e criar o arquivo final para instalar sua aplicação usando [electron-packager](https://github.com/electron-userland/electron-packager) ou [electron-builder](https://github.com/electron-userland/electron-builder)\*
* `appveyor.yml` e `.travis.yml` configurados para automatizar o deploy com [electron-builder](https://github.com/electron-userland/electron-builder)\*
* Habilidade para produzir saidas para browsers
* Acessivel [NPM scripts](/npm_scripts.md)
* Usa o [webpack](https://github.com/webpack/webpack) e [vue-loader](https://github.com/vuejs/vue-loader) com Hot Module Replacement
* Automatização do reinicio dos processos `main` do electron
* HTML/CSS/JS pre-processor suporte com [vue-loader](https://github.com/vuejs/vue-loader/)
* ES6 com [`stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/) by default
* Uso de [`babili`](https://github.com/babel/babili) para remover a nescessidade de fazer transpiling completo para o ES5
* ESLint \(com suporte ao [`standard`](https://github.com/feross/standard) e [`airbnb-base`](https://github.com/airbnb/javascript)\)\*
* Teste unitario com \(with [`karma`](https://github.com/karma-runner/karma) + [`mocha`](https://github.com/mochajs/mocha)\)\*
* End-to-end Testing \(with [`spectron`](https://github.com/electron/spectron) + [`mocha`](https://github.com/mochajs/mocha)\)\*

\*Customizavel durante o uso da `vue-cli`

### Introdução

Esse template foi construído utilizando [`vue-cli`](https://github.com/vuejs/vue-cli) e inclui opções para customizar a estrutura final do seu app. O template utiliza `node@^7` ou superior como mínimo. electron-vue também recomenda utilizar o [`yarn`](https://yarnpkg.org), gerenciador de pacotes que manipula seus pacotes de uma forma muito melhor e vai ajudar a reduzir o peso final do projeto `yarn clean`.

```bash
# Instala o vue-cli e o template do projeto
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Instala as dependencias e executa seu app (your app)
cd my-project
yarn # ou npm install
yarn run dev # ou npm run dev
```

##### Você e um usuario de Windows

Por favor olhe a [**Uma Nota Para Usuarios de Windows**](https://simulatedgreg.gitbooks.io/electron-vue/content/en/getting_started.html#a-note-for-windows-users) para que você tenha certeza que esta com todas as dependencias instaladas para conseguir fazer deploy e construir a aplicação.

##### Querendo usar Vue 1?

So um ponto a ser dado, a suporte ao Vue 1 foi oficialmente descontinuado então a estrutura do projeto, features e documentação vão refletir essas mudanças \([**documentação legado**](https://github.com/SimulatedGREG/electron-vue/tree/1.0/docs)\).

```bash
vue init simulatedgreg/electron-vue#1.0 my-project
```

### Proximos Passos

Certifique-se de olhar a [documentação](https://simulatedgreg.gitbooks.io/electron-vue/content/). Aqui você vai achar informação util sobre a configuração, estrutura do projeto, e construção de sua aplicação. Tambe tem a acessivel [FAQs](https://simulatedgreg.gitbooks.io/electron-vue/content/en/faqs.html), que ajuda a responder questões ja respondidas.

## Criado usando electron-vue

De uma olhada nesses projetos impressionantes, usando electron-vue. Que que seu projeto seja listado ? Se sinta livre de enviar um pull request.

* [**Surfbird**](https://github.com/surfbirdapp/surfbird): Um Twitter client criado usando Electron e Vue
* [**Lulumi-browser**](https://github.com/qazbnm456/lulumi-browser): Lulumi-browser e um browser leve programado usando Vue.js 2 e Electron
* [**Space-Snake**](https://github.com/ilyagru/Space-Snake): Um jogo para computador de criado usando Electron e Vue.js.
* [**Forrest**](https://github.com/stefanjudis/forrest): An npm scripts desktop client
* [**miikun**](https://github.com/hiro0218/miikun): Um simples editor de Markdown.
* [**Dakika**](https://github.com/Madawar/Dakika): A minute taking application that makes writing minutes a breeze
* [**Dynamoc**](https://github.com/ieiayaobb/dynamoc): Dynamoc is a GUI client for dynamodb-local, dynalite and AWS dynamodb
* [**Dockeron**](https://github.com/dockeron/dockeron): A dockeron project, built on Electron + Vue.js for Docker
* [**Easysubs**](https://github.com/matiastucci/easysubs): Download subtitles in a very fast and simple way
