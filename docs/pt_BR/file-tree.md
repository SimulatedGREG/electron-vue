# Árvore de Arquivos

### Durante desenvolvimento

**Nota**: Alguns arquivos/pastas podem estar diferentes das configurações "da base" escolhidos durante a estruturação na `vue-cli`.

```
my-project
├─ .electron-vue
│  └─ <build/development>.js files
├─ build
│  └─ icons/
├─ dist
│  ├─ electron/
│  └─ web/
├─ node_modules/
├─ src
│  ├─ main
│  │  ├─ index.dev.js
│  │  └─ index.js
│  ├─ renderer
│  │  ├─ components/
│  │  ├─ router/
│  │  ├─ store/
│  │  ├─ App.vue
│  │  └─ main.js
│  └─ index.ejs
├─ static/
├─ test
│  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ utils.js
│  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ karma.config.js
│  └─ .eslintrc
├─ .babelrc
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ package.json
└─ README.md
```

#### "Build" de produção

```
app.asar
├─ dist
│  └─ electron
│     ├─ static/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```

Como provavelmente você sabe, todas as coisas que são colocadas e como são colocadas, podem (e provavelmente iram) influenciar no build final do projeto. Isso é praticamente obrigatório quando se está distribuindo electron apps e você não vai querer que seu usuários faça download de software pesado.
