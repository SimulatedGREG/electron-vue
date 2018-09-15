# Using CSS Frameworks

생각할 필요가 없는 것처럼 보일지 모르지만, 이미 설치되어있는 [`style-loader`](https://github.com/webpack/style-loader)를 사용하여 webpack으로 써드 파티 CSS 라이브러리를 가져와야합니다.

## Use Case

애플리케이션에 [bootstrap](http://getbootstrap.com/), [bulma](http://bulma.io/) 또는 [materialize](http://materializecss.com/)를 사용하려고한다고 가정 해봅시다. 계속해서 평소처럼 `npm` 에서 라이브러리를 설치하세요. 다만 `index.ejs`에 asset을 첨부하는 대신 특별히 `src/renderer/main.js` 자바스크립트에 CSS를 import 하세요.

#### Example

`bulma`를 설치합니다.

```bash
npm install bulma --save
```

`src/renderer/main.js`에 이 라인을 추가합니다.

```bash
import 'bulma/css/bulma.css'
```

또는 component 파일 내부에서 `bulma`를 포함 할 수도 있습니다.

**App.vue**

```html
<style>
  @import "~bulma/css/bulma.css";
</style>
```

이제 `webpack`은 애플리케이션 용 `bulma`를 로드하여 프로덕션 빌드에서 사용할 수 있게 합니다.
