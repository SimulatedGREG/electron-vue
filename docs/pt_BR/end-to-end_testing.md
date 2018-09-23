# Teste End-to-End

O electron-vue utiliza o [Spectron](http://electron.atom.io/spectron/) o [Mocha](https://mochajs.org/) \(com o [Chai](http://chaijs.com/)\) frameworks de teste do tipo end-to-end. Mocha & Chai APIs, incluem `expect`, `should`, e `assert`, que estão disponíveis no escopo global.

### Rodando testes

```bash
# Executando o mochajs
npm run e2e
```

##### Nota

Antes de ser executado os testes end-to end, o comando `npm run pack` é chamado para criar uma build de produção que o Spectron consome durante os testes.

### Estrutura de arquivos

```
my-project
├─ test
|  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
└─ └─ └─ utils.js
```

**Na maior parte, você pode ignorar o **`index.js`** e focar somente na escrita **`specs/`**.**

#### `specs/`

Dentro deste diretório é onde os testes são configurados. Graças ao `babel-register`, você possui acesso total ao ES2015.

#### `index.js`

Este arquivo atua como a entrada principal para o Mocha e reunir todos os testes escritos no `specs/` para os testes.

#### `utils.js`

Aqui você poderá encontrar funções genéricas
Here you will find generic functions that could be of use throughout your `specs/`. Base functions include a `beforeEach` and `afterEach` that handle the electron creation/destruction process.

### On the subject of Spectron

Spectron é o framework de teste oficial do [electron](http://electron.atom.io) e é utilizado no [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/) e [WebDriverIO](http://webdriver.io/) para manipulação dos elementos DOM.

#### Using WebDriverIO

As stated in the Spectron [documentation](https://github.com/electron/spectron#client), access to [WebDriverIO APIs](http://webdriver.io/api.html) can be accessed through `this.app.client`. Since electron-vue uses Mocha, the context of `this` is shared between `afterEach`, `beforeEach`, and `it`. Because of this, it is important to note that ES2015 arrow functions cannot not be used in certain situations as the context of `this` will be overwritten \([more info](https://mochajs.org/#arrow-functions)\).

Como ja declardo na [documentação](https://github.com/electron/spectron#client) do Spectron, o acesso a [WebDriverIO APIs](http://webdriver.io/api.html) ele pode ser acessadp peçlo `this.app.client`. Desde que electron-vue começou a usar o mocha, no contexto de `this` e dividido entre `afterEach`, `beforeEach`, e `it`. Por conta disso, e importante saber que em certas condições as arrow functions não podem ser usadas onde o contexto de `this` vai ser sobreescrito \([mais informa](https://mochajs.org/#arrow-functions)\).
