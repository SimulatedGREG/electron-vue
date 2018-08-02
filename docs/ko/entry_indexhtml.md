# `index.html` 등재

electron-vue는 프로덕션 빌드에서`index.html`을 만들기 위해 [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin)을 사용합니다. 
개발 중에`src/`디렉토리에`index.ejs`가 있습니다. 여기에서 입력 HTML 파일을 변경할 수 있습니다.

If you are unfamiliar with how this plugin works, then I'd encourage you take a look at its [documentation](https://www.npmjs.com/package/html-webpack-plugin). But in short, this plugin will automatically inject production assets including `renderer.js` and `styles.css` into a final minified `index.html`.

이 플러그인이 어떻게 작동하는지 익숙하지 않다면 [documentation](https://www.npmjs.com/package/html-webpack-plugin)을 살펴 보시기 바랍니다. 
간단히 말해서,이 플러그인은`renderer.js`와`styles.css`를 포함한 프로덕션 자산을 최종 축소 된`index.html`에 자동으로 주입합니다.

### 개발 중 `index.ejs` 

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

### `index.html` 재품 중 \(미-압축\)

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

### CDN 사용에 관한 주제

CDN에서 제공된 자산을 사용하면 얻을 수있는 이점은 응용 프로그램의 최종 빌드 크기에 매우 유용 할 수 있지만, 이를 사용하지 않는 것이 좋습니다. 
주된 이유는 응용 프로그램이 인터넷에 항상 액세스 할 수 있다고 가정하고 있기 때문입니다. 
일렉트론 응용 프로그램의 경우는 항상 그렇지 않습니다. 
부트 스트랩과 같은 CSS 프레임 워크에서는 인터넷 연결이 없다면 앱이 빠르게 엉성한 스타일이되어 버리기 때문에 이것이 중요한 문제가됩니다.

> "I don't care, I still want to use a CDN"

If you are determined to still use a CDN, then you can still do so by adding the tags to your `src/index.ejs` file. Just make sure to set up proper UI/UX flows for when you app is offline.

여전히 CDN을 사용하기로 결정했다면,`src/index.ejs` 파일에 태그를 추가하여 여전히 그렇게 할 수 있습니다. 
앱이 오프라인 일 때 적절한 UI / UX 플로우를 설정하십시오.