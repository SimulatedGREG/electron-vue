# Novas versões

electron-vue has evolved greatly since its initial creation in May of 2016 and has introduced many new fantastic features. Can you believe there was a time `vue-cli` scaffolding wasn't support? Development of new features is not planned to end anytime soon. The only down side to new bells & whistles every now and then is having your project stuck on an older scaffold. Since electron-vue takes advantage of `vue-cli` there unfortunately isn't a structured way to _version_ the boilerplate or make it _updatable_.

Major updates of electron-vue will be made through GitHub Milestones and will include many new features/bug fixes at a time, making these releases the optimal time to [migrate](/migration-guide.md) any existing projects to a newer scaffold. These milestones are not usually planned, but arise as feature requests add up in the issue tracker.

### Objetivos passados

#### [Multiplex](https://github.com/SimulatedGREG/electron-vue/milestone/1?closed=1)

* Migração para o `webpack` 2
* Suporte para o `electron-builder`
* Supoerte para a contrução de processo `main`
* Resolvendo problemas gerais

#### [Minimizar](https://github.com/SimulatedGREG/electron-vue/issues/171)

* Migração para um unico arquivo `package.json`
* Travis CI / AppVeyor configs for `electron-builder` users
* Configuraçẽos para Travis CI / AppVeyor para os usuarios de `electron-builder`
* Saida web minima no processo `renderer`

* Migração para o `axios`
* Suporte completo para agrupar o processo `main`
* Reescrevendo os scripts de desenvolvimento e construção
* Migration to `babili` to remove the need of transpiling down completely to ES5
* Migração para o `babili` para remover a nescessidade de transpilar completamente para o ES5
* Suporte para `static/` assets enquanto usam modulos que nescessitam de prover um caminho completo \([`__static`](/using-static-assets.md)\)
