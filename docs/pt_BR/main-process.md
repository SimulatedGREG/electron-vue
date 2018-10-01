# Main Process

> No Electron, o processo que roda o package.json's script primario e chamado pelo processo principal. O script que roda no processo principal pode mostrar uma interface grafica, criando paginas web.

**Tirado da **[**documentação do Electron**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)

---

Desde que o `processo` principal e essencial para um ambiente completo node, não se tem uma estrutura incial a não ser dois arquivos.

#### `src/main/index.js`

Este arquivo e o principal de sua aplicação, esse arquivo que o `electron` começa com. Ele tambem pode ser usado pelo `webpack` como arquivo de entrada pra produção. Todo arquivo no processo `principal` principal começar daqui.

#### `app/src/main/index.dev.js`

Este arquivo e usado especificamente e unicamente para desenvolvimento e ele instala o `electron-debug` & `vue-devtools`. Não se precisa modificar esse arquivo, mas isso pode ser usado para extender suas nescessidades de desenvolvimento.

## No caso de usar o `__dirname` & `__filename`

Desde que o processo `principal` e empacotado usando `webpack`, o uso de `__dirname` & `__filename` **não vai** prover nenhum valor para a produção. Se referindo a [**Arvore de Arquivos**](/file-tree.md), você vai notar que na produção o `main.js` e colocado dentro da pasta `dist/electron`. Baseado no nesse conhecimento, use `__dirname` & `__filename` de acordo.

**Se você precisa usar o caminho para o `static/` assets directory, tenha atenção de ler o **[**Usando Assets Estaticos**](/using-static-assets.md)** para saber como usar esta variavel super acessivel `__static`.**


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
