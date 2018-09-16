# Static Assets 사용하기

이전에 공식 `vuejs-templates/webpack` 보일러플레이트를 사용했다면, `static/` 디렉토리에 익숙해야합니다. 여기에 `main`과 `renderer` 프로세스 둘 다가 소비 할 수 있는 Static assets을 배치 할 수 있습니다. Vue 애플리케이션에서 이러한 assets을 사용하는 것은 간단하지만 전체 경로가 필요한 `fs` 및 다른 모듈을 사용하는 것은 다소 까다로울 수 있습니다. 감사하게도 electron-vue는 개발 및 프로덕션 환경에서 `static/` 디렉토리 경로를 생성하는 `__static` 변수를 제공합니다.

### Vue Components에서 'src' 태그 사용 사례

이미지를 로드하는 component가 있지만 다른 작업이 완료 될 때까지 이미지의 경로를 알 수 없다고 가정 해 보겠습니다. 작업을 단순하게 유지하기 위해 `<img>`의 src 바인드하기 위해 `data` 변수를 합시다.

**SomeComponent.vue**

```html
<template>
  <img v-bind:src="imageUrl">
</template>

<script>
  export default {
    data () {
      // notice the url starts with `static/`
      return { imageUrl: 'static/imgs/unsplash.png' }
    }
  }
</script>
```

여기서 `webpack`은 `unsplash.png` 이미지를 번들로 제공하지 않으며 애플리케이션은 해당 asset을 `static/imgs/unsplash.png` 디렉토리에서 찾습니다. `vue-loader` 덕분에 모든 더러운 작업이 완료되었습니다.

### Use Case within JS with `fs`,`path` and `__static`

`fs`를 사용하여 애플리케이션에서 읽을 static asset이 있다고 가정 해 봅시다. 근대 개발과 프로덕션 둘 다에서  `static/` 디렉토리에 대한 신뢰할 수있는 경로를 얻는 방법은 무엇입니까? electron-vue는 `static/` 디렉토리에 대한 적절한 경로를 생성하는 `__static`이라는 전역 변수를 제공합니다. 다음은 개발과 프로덕션 둘 다에서 간단한 텍스트 파일을 읽는 방법입니다.

**static/someFile.txt**

```txt
foobar
```

**SomeFile.js \(**`main`** or **`renderer`** process\)**

```js
import fs from 'fs'
import path from 'path'

let fileContents = fs.readFileSync(path.join(__static, '/someFile.txt'), 'utf8')

console.log(fileContents)
// => "foobar"
```

프로덕션 환경에서는 기본적으로 모든 파일이 [`asar`](https://github.com/electron/asar)로 압축되어 있으므로 `__static`는 적극 권장합니다. 왜냐하면 `static/` 폴더 내의 assets은 오직 `electron`에서 액세스 할 수 있기 때문입니다. electron은 이 동작을 알고 있습니다. 예를 들어 외부 프로그램에서 열 수있는 파일을 사용자에게 배포하려는 경우, 먼저 애플리케이션의 해당 assets을 사용자의 문서 공간 또는 데스크톱으로 복사해야합니다.[`shell.openItem()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath) electron API를 사용하여 해당 assets을 열 수 있습니다.

이 상황에서 다른 대안은 특정 파일을 프로덕션 환경의 `asar` 아카이브에서 "unpack"하도록 `electron-packager`/`electron-builder`를 구성하는 것 입니다. electron-vue는 이 방법을 지원할 계획이 없습니다. 이 이슈와 관련된 것 또는 이를 설정하는 방법은 닫힙니다.

