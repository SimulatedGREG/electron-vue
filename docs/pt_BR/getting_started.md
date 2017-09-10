# Começando Agora

## Scaffolding
### Quais ferramentas usamos para montar esse projeto/template.

Esse template é construído com [vue-cli](https://github.com/vuejs/vue-cli) e inclui opção para customizar o scaffolded da sua aplicação. O uso de `node@^7` ou superior é requerido. electron-vue também recomenda oficialmente o uso do [`yarn`](https://yarnpkg.org) package manager ele maneja as dependências muito melhor e pode ajudar a reduzir o tamanho da build final com `yarn clean`.

```bash
# Instalando vue-cli e estrutura do template
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Instalando dependências e rodando seu app
cd meu-projeto
yarn # ou npm install
yarn run dev # ou npm run dev
```

#### Sobre o tema electron

Apesar de opcional, isso é recomendado para bloquear versão do electron depois de estruturar seu projeto. Isso ajuda a prevenir que outros desenvolvedores trabalhem no mesmo projeto desenvolvendo com diferentes versões. Electron solta releases que as vezes modificam features que estão sempre em mudanças. [Mais informações](http://electron.atom.io/docs/tutorial/electron-versioning/).

#### Uma nota para usuários Windows

Se você está tendo erros durante o `npm install` por conta do `node-gyp`, então você provavelmente não tem as ferramentas ideiais instalandas no seu sistema. Ferramentas para build incluem itens como Python e Visual Studio. Um agradecimento ao [@felixrieseberg](https://github.com/felixrieseberg), existem alguns pacotes que ajudam a diminuir esse processo.

O primeiro item que precisamos verificar é a nossa versão do npm e assegurar que não está desatualizado. Nós conseguimos fazer isso usando [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade). Se você está usando o `yarn`, então você pode pular essa verificação.

Uma vez que esteja completo, nós podemos então continuar configurando as ferramentas que precisamos. Usando [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools), a maior parte do trabalho sujo é feito por nós. Instalando isso globalmente nós por sua vez configure o Visual com os pacotes C++, Python, e mais.

Até esse ponto as coisas devem estar instaladas com sucesso, mas se não, faça uma instalação limpa do Visual Studio Code. Por favor, note que estes não são problemas diretos com o próprio electron-vue \(Windows
pode ter dificuldades as vezes ¯\\\_\(ツ\)\_/¯\).
