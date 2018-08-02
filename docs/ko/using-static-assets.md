# 정적 애셋 사용

If you have used the official `vuejs-templates/webpack` boilerplate before, then you should be familiar with the `static/` directory. It is here where you can place static assets that both the `main` and `renderer` process can consume. Using these assets within your Vue application is simple, but usage with `fs` and other modules that need a full path can be a little tricky. Thankfully, electron-vue provides a `__static` variable that yields the path to the `static/` directory in both development and production.

이전에`vuejs-templates/webpack` 공식판을 사용했다면`static/`디렉토리에 익숙해야합니다. `main`과 `renderer` 프로세스가 모두 소비 할 수있는 정적 자산을 둘 수있는 곳입니다. Vue 응용 프로그램에서 이러한 자산을 사용하는 것은 간단하지만 `fs` 및 전체 경로가 필요한 다른 모듈을 사용하는 것은 약간 까다로울 수 있습니다. 감사하게도, electron-vue는 개발과 생산 모두에서 `static /` 디렉토리에 대한 경로를 생성하는 `__static` 변수를 제공합니다.

### Vue 구성 요소에서`src` 태그 내의 사용 예

이미지를로드하는 구성 요소가 있지만 다른 작업이 완료 될 때까지 이미지의 경로를 알 수 없다고 가정 해 보겠습니다. 간단히하기 위해서`data` 변수를 사용하여 우리의`<img>`src를 바인드하자.

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

여기서 `webpack`은 `unsplash.png` 이미지를 번들하지 않을 것이며, 어플리케이션은 그 애셋의 `static/imgs/unsplash.png` 디렉토리를 볼 것입니다. `vue-loader` 덕분에 모든 더러운 작업이 완료되었습니다.

### JS 내에서`fs`,`path`,`__static`로 사용 예

우리가 `fs`를 사용하여 애플리케이션에 읽어 들일 정적 애셋을 가지고 있다고 가정 해 봅시다. 하지만 개발과 프로덕션 모두에서 `static/` 디렉토리에 대한 안정적인 경로를 얻으려면 어떻게해야할까요? electron-vue는 `static/` 디렉토리에 대한 적절한 경로를 생성하는 `__static` 이라는 전역 변수를 제공합니다. 다음은 개발 및 제작 과정에서 간단한 텍스트 파일을 읽는 방법입니다.

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

Please note that in production all files are packed with [`asar`](https://github.com/electron/asar) by default as it is highly recommended. Because of this, assets within the `static/` folder can only be accessed within `electron` since it is aware of this behavior. So if you are planning to distribute files to your users, that can for example open in a external program, you would first need to copy those assets from your application into the user's document space or desktop. From there you could use the [`shell.openItem()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath) electron API to open those assets.

프로덕션 환경에서는 기본적으로 모든 파일이 [`asar`](https://github.com/electron/asar)로 압축되어 있으므로 적극 권장합니다. 
이 때문에 `static/` 폴더 내의 자산은 이 동작을 알고 있기 때문에 `일렉트론` 내에서만 액세스 할 수 있습니다. 
예를 들어 외부 프로그램에서 열 수있는 파일을 사용자에게 배포하려는 경우 먼저 응용 프로그램의 해당 에셋을 사용자의 문서 공간 또는 데스크톱으로 복사해야합니다. 
거기에서 [`shell.openItem ()`](https://electron.atom.io/docs/api/shell/#shellopenitemfullpath) 일렉트론 API를 사용하여 해당 자산을 열 수 있습니다.

이 상황에 대한 또 다른 방법은 `electron-packager`/`electron-builder`  를 특정 파일을 생산시`asar` 아카이브로부터 "언팩"하도록 설정하는 것입니다. electron-vue는 이 방법을 지원할 계획이 없습니다. 이 문제와 관련된 모든 문제 또는이를 설정하는 방법은 종료됩니다.
