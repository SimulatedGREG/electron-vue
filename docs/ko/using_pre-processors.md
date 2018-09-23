# 전처리기 사용하기

[`webpack`](https://github.com/webpack/webpack)과 함께 [`vue-loader`](https://github.com/vuejs/vue-loader)를 사용하면 큰 노력을 들이지 않고도 Vue components 파일에서 직접 HTML/CSS/JS를 전-처리 할 수 ​​있다는 이점이 있습니다. 이에 대한 자세한 내용은 [**여기**](https://vuejs.org/v2/guide/single-file-components.html)를 참조하세요.

## Use Case

CSS를 사전 처리하기 위해 Sass/SCSS를 사용해야한다고 가정 해봅시다. 먼저 다음 구문을 처리 할 적절한 `webpack` loader를 설치해야합니다.

#### `sass-loader` 설치하기

```bash
npm install --save-dev sass-loader node-sass
```

필요한 로더가 설치되면, 거의 모든 것이 끝난 것 입니다.  `vue-loader`는 마술처럼 나머지를 처리합니다. 이제 Vue component 파일에 `lang="sass"` 또는 `lang="scss"`를 쉽게 추가 할 수 있습니다 `sass-loader`의 의존성 패키지인 `node-sass`도 설치했음을 주의하세요.

#### `lang` 속성 적용하기

그래서...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

...이제 된다...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

다른 전처리기에 대해서도 같은 원칙이 적용됩니다. 그러므로 JS에 coffeescript가 필요하다면, [coffeescript-loader](https://github.com/webpack/coffee-loader)를 설치하고 `lang="coffeescript"` 속성을 `<script>` 태그에 적용하기만 하면됩니다.

이 기능의 고급 사용법은 [vue-loader documentation](http://vue-loader.vuejs.org/en/configurations/pre-processors.html) 설명서로를 참고하세요.

## Sass/SCSS 전역 변수 사용하기

CSS 구문에 Sass/SCSS를 사용하는 경우, 모든 Vue component 파일에서 global variables/mixins를 사용할 수 있다면 매우 유용할 것 입니다. 여기에 그 방법이 있습니다.

### Use Case

이 예는 모든 Vue component 파일에 `globals.scss`를 적용하는 방법을 보여줍니다. 이 문서는 위에서 언급 한 바와 같이 이미 개발 환경에 `sass-loader`를 설치했다고 가정합니다.

#### 전역 변수를 정의하세요.

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### `globals.scss`를 `node-sass`에 직접 넣으세요.

**.electron-vue/webpack.renderer.config.js**에서 `vue-loader` config을 편집하세요.

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### 전역 변수를 사용하세요.

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```



