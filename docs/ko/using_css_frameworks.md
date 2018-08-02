# Using CSS Frameworks

이것은 생각할 필요가없는 것처럼 보일 지 모르지만, [`style-loader`](https://github.com/webpack/style-loader)를 사용하여 webpack으로 써드 파티 CSS 라이브러리를 가져와야합니다. 이미 설치되어 있습니다.

## Use Case

애플리케이션에 [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/) 또는 [materialize](http://materializecss.com/)를 사용한다고 가정 해 보겠습니다. . 계속해서`npm`에서 라이브러리를 설치하십시오. 일반적으로 자산을`index.ejs`에 연결하는 대신 자바 스크립트, 특히`src / renderer / main.js`에서 CSS를 가져올 것입니다.


#### Example

`bulma` 설치

```bash
npm install bulma --save
```

`src/renderer/main.js` 안에 이 줄을 추가

```bash
import 'bulma/css/bulma.css'
```

대신, `bulma` 를 컴포넌트 파일에서 임포트 할 수 도 있다.

**App.vue**

```html
<style>
  @import "~bulma/css/bulma.css";
</style>
```


이제`webpack`은 `bulma`에서 우리 애플리케이션을 로드하고 우리의 프로덕션 빌드에서 사용할 수있게 할 것입니다.

