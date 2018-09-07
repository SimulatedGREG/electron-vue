# [`electron-packager`](https://github.com/electron-userland/electron-packager) 사용하기

`electron-packager`에 의해 생성 된 모든 빌드는 `build` 폴더 내에 있습니다.

#### 모든 플랫폼 구축

모든 운영 체제가 다른 모든 플랫폼 용으로 구축 할 수있는 것은 아닙니다.

```bash
npm run build
```

#### 특정 플랫폼 용 빌딩

플랫폼에는 `darwin`,`mas`,`linux`,`win32`가 있습니다.

```bash
# build for darwin (macOS)
npm run build:darwin
```

#### Cleaning

`build`에서 모든 빌드를 삭제하십시오.

```bash
npm run build:clean
```

### 비 Windows 사용자를위한 메모

비 Windows 플랫폼을 사용하여 **사용자 정의 아이콘**으로 **Window**를 구축하려면 [wine](https://www.winehq.org/)을 설치해야합니다. [More Info](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms).

### 기본 구축 구성

`electronic-packager`'의 옵션에 따라`.electron-vue/build.config.js`에서 더 많은 맞춤 설정이 가능한 방법이 [여기](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options)에 있습니다.
빌드 된 어플리케이션에 적용된 이름은`package.json`에있는`productName` 값으로 설정됩니다.

```js
{
    // Target 'x64' architecture
    arch: 'x64',

    // Compress app using 'electron/asar'
    asar: true,

    // Directory of the app
    dir: path.join(__dirname, '../'),

    // Set electron app icon
    // File extensions are added based on platform
    //
    // If building for Linux, please read
    // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#icon
    icon: path.join(__dirname, '../build/icons/icon'),

    // Ignore files that would bloat final build size
    ignore: /(^\/(src|test|\.[a-z]+|README|yarn|static|dist\/web))|\.gitkeep/,

    // 빌드된 결과물을 build 폴더에 넣는다.
    out: path.join(__dirname, '../build'),

    // 기존 빌드를 덮어쓴다
    overwrite: true,

    // 플랫폼을 설정하는 환경변수
    platform: process.env.BUILD_TARGET || 'all'
}
```



