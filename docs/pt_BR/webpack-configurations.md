# Configurações do Webpack

electron-vue vem com três arquivos de configuração do webpack separados, todos localizados na pasta `.electron-vue/`.
Além do uso opcional do output `web`, ambos `main` e `renderer` são similares em estrutura. Ambos fazem uso de `babel-preset-env` para atingir as features do `node@7`, usam `babili` e tratam todos os modulos como `externals`.


### `.electron-vue/webpack.main.config.js`

Segmenta o processo `main` do electron. Essa configuração é bem simples, mas inclui algumas práticas comuns do `webpack`.

### `.electron-vue/webpack.renderer.config.js`

Segmenta o processo `renderer` do electron. Essa configuração lida com a sua aplicação Vue, então inclui o `vue-loader` 
e várias outras configurações que estão disponiveis no _boilerplate_ original. 

##### Colocando Externals na lista branca

Uma coisa importante a se considerar sobre está configuração é que você pode adicionar modulos especificos a _whitelist_ para que não sejam tratados como `externals` no webpack.
Não existem muitos casos de uso onde essa funcionálidade é necessaria, mas no caso de bibliotecas Vue UI que fornecem componentes `*.vue` "brutos", eles precisão estar nesta lista de permissões para que o `vue-loader` consiga compilá-los.
Outr caso seria o uso de _alias_ do webpack, como configurar o `vue` para importar a compilação completa do Compiler + Runtime. Por causa disso, o `vue` já está na lista branca.

### `.electron-vue/webpack.web.config.js`

Atinge a build do processo `renderer` 

Segmenta a construção do código-fonte do processo `renderer` para o navegador.
Essa configuração é um ótimo ponto de partida caso você precise publicar na web.
**electron-vue não tem suporte para web além do que já é fornecido**
Quaisquer problemas relacionados a build para web provavelmente serão fechados.

