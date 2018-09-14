# Entry `index.html`

electron-vue는 프로덕션 빌드 중 [**`html-webpack-plugin`**](https://github.com/ampedandwired/html-webpack-plugin)을 사용하여 `index.html`을 만듭니다.
여러분은 개발 중에 `src/` 디렉토리에서 `index.ejs`를 발견할 것 입니다. 여기서 엔트리 HTML 파일을 변경 할 수 있습니다.

이 플러그인의 작동 방식에 익숙하지 않은 경우, 이 [문서](https://www.npmjs.com/package/html-webpack-plugin)를 읽기 바랍니다. 간단히 말해, 이 플러그인은 `renderer.js`과 `styles.css`을 포함한 프로덕션 assets을 최종으로 축소된 index.html에 자동으로 삽입합니다.

### 개발 할 때 `index.ejs`

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

### 프로덕션의 `index.html` \(non-minified\)

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

### CDNs 사용에 관하여

CDN에서 제공되는 assets을 사용하면 애플리케이션의 최종 빌드 사이즈에 득이 되지만 사용하지 않는 것을 권합니다. 주된 이유는 여러분은 애플리케이션이 인터넷에 항상 액세스 할 수 있다고 가정하지만 Electron 앱의 경우 항상 그렇지 않습니다. 이는 bootstrap 같은 CSS 프레임워크에서 중요한 이슈가 됩니다. 여러분의 앱은 아주 빠른 속도로 스타일이 없는 난잡한 상태가 될 수 있습니다.

> "나는 이를 신경쓰지 않고 CDN을 계속 사용하고 싶습니다."

CDN을 계속 사용하기로 결정한 경우, `src/index.ejs`에 태그를 추가하여 계속해서 사용 할 수 있습니다. 다만, 앱이 오프라인 일 때 적절한 UI/UX 플로우를 설정하길 바랍니다.
