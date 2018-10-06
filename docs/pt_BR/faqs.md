# FAQs
## Perguntas frequentes...

* [Por que meu app em electron esta branco sem nada depois de rodar `npm run dev` ?](#why-is-my-electron-app-blank-after-running-npm-run-dev)
* [Por que o meu electron app mostra um explorador de arquivos ?](#why-does-my-electron-app-show-a-file-explorer)
* [Por que `vue-devtools`/`devtron` esta faltando ?](#why-is-vue-devtoolsdevtron-missing)
* [Onde eu coloco meus assets estaticos ?](#where-do-i-put-static-assets)
* [Por que o `npm run lint` resulta em um erro ?](#why-did-npm-run-lint-end-with-an-error)
* [Por que quando eu rodo `npm run lint` ele termina com um erro ?](#why-did-npm-run-lint-end-with-an-error)
* [Por que eu não consigo carregar meu app  no browser ?](#why-cant-i-load-my-app-in-a-web-browser)
* [Como eu importo o `jquery` ?](#how-do-import-jquery)
* [Como eu debugo o processo `main` ?](#how-can-i-debug-the-main-process)

---

## Por que meu app em electron esta branco sem nada depois de rodar `npm run dev` ?

#### TL;DR (Muito longo não lerei)

Tenha certeza que você não tenha uma **proxy** pessoal que possa estar atrapalhando o `webpack-dev-server`.

## Por que o meu electron app mostra um explorador de arquivos ?

#### TL;DR (Muito longo não lerei)

Your `src/renderer` contains error\(s\). Check console, fix errors, then refresh electron with `CommandOrControl+R`.

Seu `src/renderer` contem erro\(s\). Olha o console, para corrigir, e depois da um recarregar com o comando `CommandOrControl+R`.

##### Resposta longa

If error\(s\) are present in you `src/renderer` this creates conflicts with ESLint on first run. In turn, an INVALID webpack `renderer.js` is produced which interrupts `HtmlWebpackPlugin` from creating `index.html`. Since `webpack-dev-server` doesn't have the `index.html` ready to serve, the server falls back to the file explorer.

Se um erro\(s\) esta presente no seu `src/renderer` pode criar conflitos com o ESLint quando você executa na primeira vez. Enquanto isso o webpack gera um arquivo `renderer.js` o que interrompe o `HtmlWebpackPlugin` de funcionar e criar o arquivo `index.html`. Quando o `webpack-dev-server` não tem o `index.html` para servir, o servidor utiliza o explorador de arquivos como fallback.

## Por que `vue-devtools`/`devtron` esta faltando ?

Make sure to close and reopen the developer tools panel on first launch if they are missing. Also check your terminal check for any error messages that may occur during installation.

## Onde eu coloco meus assets estaticos ?

[**Usando Static(estatico) Assets**](using-static-assets.md)

## Por que o `npm run lint` resulta em um erro ?

The default nature of eslint is to print linting errors to console, and if there is any found the script will end with a non-zero exit \(which produces npm errors\). This is normal behavior.

O natural e que o ESLint vai imprimir os error de linting para o console, e se ele achar qualquer script ele ira terminar com um non-zeo exit \(o que produz erro\(s\) de npm\). Isto e um comportamento normal.

## Por que eu não consigo carregar meu app  no browser ?

[\#195](https://github.com/SimulatedGREG/electron-vue/issues/195) (Desculpa não temos como traduzir esta parte.)

## Como eu importo o `jquery`?

If you are wanting to use `bootstrap`, I'm going to have to stop you right there. Using both `vue` and `jquery` in the same environment is a bad practice and leads to the two frameworks colliding with each other. I would highly recommend using a `bootstrap` alternative that uses `vue` for its JavaScript functionality. Some recommendations include [`bootstrap-vue`](https://github.com/bootstrap-vue/bootstrap-vue) and [`vue-strap`](https://github.com/yuche/vue-strap). For whatever reason you must use `jquery`, seek guidance from `webpack`'s documentation about the `ProvidePlugin` or see [\#192](https://github.com/SimulatedGREG/electron-vue/issues/192).

Se você esta querendo usar o `bootstrap`, Eu vou ter que parar você exatamente aqui. Usar os dois `vue` e `jquery` no mesmo ambiente de desenvolvimento e uma má pratica e leva a duas frameworks se colidindo, causando erros `bootstrap` procure uma alternativa `vue` para essa função do JavaScript. Algumas recomendações são:  [`bootstrap-vue`](https://github.com/bootstrap-vue/bootstrap-vue) e [`vue-strap`](https://github.com/yuche/vue-strap). Mas se por qualquer razão vocês esta sendo obrigado a usar o  `jquery`, procure ajuda documentação do `webpack` sobre como e `ProvidePlugin` ou veja [\#192](https://github.com/SimulatedGREG/electron-vue/issues/192). (Problemas como issues não tem como nos traduzirmos por enquano, mas se alguem se oferecer em traduzir parte importantes da isse seria uma bela contribuição)

## Como eu debugo o processo `main` ?

When using `electron@^1.7.2` you can open up Google Chrome, head to `chrome://inspect`, and then pop open the remote electron process while your application is running in development mode.

Quando usamos o `electron@^1.7.2` você pode abrir o Google Chrome, você vai direto em `chrome://inspect`, e você abre um pop up com as informações do processo enquanto ele esta sendo usado em modo de desenvolvimento.

[Documentação Electron](https://github.com/electron/electron/blob/master/docs/tutorial/debugging-main-process.md)
