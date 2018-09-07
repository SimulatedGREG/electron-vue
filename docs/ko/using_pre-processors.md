# 전처리 기 사용

[`vue-loader`](https://github.com/vuejs/vue-loader)를 [`webpack`](https://github.com/webpack/webpack)과 함께 사용하면 얻을 수있는 큰 이점 중 하나는 Vue 구성 요소 파일에서 직접 HTML/CSS/JS를 사전 처리 할 수 ​​있습니다. 이 확인에 대한 자세한 내용은 [**여기**](https://vuejs.org/v2/guide/single-file-components.html)를 참조하십시오.

## 사용 케이스

CSS를 사전 처리하기 위해 Sass/SCSS를 사용해야한다고 가정 해 봅시다. 먼저,이 구문을 처리하기 위해 적절한 `webpack` 로더를 설치해야합니다

#### `sass-loader` 설치하기

```bash
npm install --save-dev sass-loader node-sass
```

일단 우리가 필요로하는 로더가 설치되면 모든 것이 거의 완성됩니다. `vue-loader`는 불가사의하게 나머지를 처리 ​​할 것입니다. 이제 우리는`lang = "sass"`또는`lang = "scss"`를 Vue 컴포넌트 파일에 쉽게 추가 할 수 있습니다. `sass-loader`에 종속 된 패키지이기 때문에`node-sass`도 설치했습니다.

#### `lang` 속성 적용하기

그래서...

```html
<style>
  body {
    /* CSS */
  }
</style>
```

...가 지금은 이렇게 됩니다...

```html
<style lang="scss">
  body {
    /* SCSS */
  }
</style>
```

다른 어떤 전처리기에 대해서도 같은 원칙이 적용됩니다. 그래서 JS에 coffeescript가 필요한가요? [coffeescript-loader](https://github.com/webpack/coffee-loader)를 설치하고 `<script>` 태그에 `lang="coffeescript"`속성을 적용하기 만하면됩니다.

이 기능의 고급 사용에 대한 자세한 내용은 [vue-loader 설명서](http://vue-loader.vuejs.org/en/configurations/pre-processors.html)로 이동하십시오.

## Sass/SCSS 를 전역에서 사용하기

CSS 구문에 Sass/SCSS를 사용하면 모든 Vue 구성 요소 파일에서 전역 변수/혼합을 사용하는 것이 매우 유용합니다. 그런 일이 일어나게하는 방법이 있습니다.

### 사용 경우

이 예제는 모든 Vue 컴포넌트 파일에 `globals.scss`를 적용하는 법을 보여줍니다. 이 문서는 이미 위에서 언급 한 바와 같이 개발 환경에 `sass-loader`를 이미 설정했다고 가정합니다.

#### 당신의 전역 스타일 정의

**src/renderer/globals.scss**

```scss
$brand-primary: blue;
$brand-accent: turquoise;
```

#### `globals.scss` 를 `node-sass` 에 직접 주입하기

**.electron-vue/webpack.renderer.config.js**에 있는 `vue-loader` 로더 설정을 편집하세요. 

```js
loaders: {
  sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1&data=@import "./src/renderer/globals"',
  scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/renderer/globals";'
}
```

#### 당신의 전역을 스타일을 사용하기

**SomeComponent.vue**

```html
<style lang="scss">
  body { color: $brand-primary; }
</style>
```



