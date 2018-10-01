# `index.html` de entrada

electron-vue se utiliza do [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin) para criar o `index.html` nas builds de produção. Durante o desenvolviment você ira encontrar o `index.ejs` na pasta `src/`. E aqui que você faz as mudanças no HTML de entrada.

Se vocês esta desfamiliarizado sobre como o plugin funciona, então eu encorajo você dar uma olhada nisso [documentação](https://www.npmjs.com/package/html-webpack-plugin). Resumindo, esse plugin vai automaticamente injetar os assets da produção incluindo `renderer.js` e `styles.css` no arquivo minificado no `index.html`.

### `index.ejs` durante desenvolvimento

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <%= ... %>
  </head>
  <body>
    <div id="app"></div>
    <!-- webpack builds are automatically injected -->
  </body>
</html>
```

### `index.html` em produção \(não minificado\)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>app</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="renderer.js"></script>
  </body>
</html>
```

### No assunto de usar CDNs

Sabendo dos beneficios de usar assets servido pelas CDNs pode ser otimo para suas aplicaçãos finais em quesito de espaço usado, eu vou avisar o uso contra eles. A razão principal e que fazendo isso você esta assumindo que a aplicação sempre sera acessada pela internet, o que as vezes não e o caso da maioria dos Electron apps. Isto esta sendo um grande problema com frameworks CSS atualmente como o bootstrap, e seus apps vão se tornando bagunça não estilizada.

> "Eu não ligo, eu ainda quero usar CDNs"

Se você esta mesmo assim determinado a usar as CDNs, então você pode adicionar toda as tags ao seu arquivo `src/index.ejs`. So faça um app que tenha uma UI/UX estando offline.
