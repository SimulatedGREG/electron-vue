# [`electron-packager`](https://github.com/electron-userland/electron-packager) 사용하기

`electron-packager`가 생성 한 모든 빌드는 `build` 폴더에서 찾을 수 있습니다.

#### 모든 플랫폼 빌드

모든 운영체제가 다른 모든 플랫폼을 위한 빌드를 할 수있는 것은 아닙니다.

```bash
npm run build
```

#### 특정 플랫폼 빌드

플랫폼에는 `darwin`, `mas`, `linux` 및 `win32`가 포함됩니다.

```bash
# build for darwin (macOS)
npm run build:darwin
```

#### Cleaning

`build` 폴더에 있는 모든 빌드를 제거합니다.

```bash
npm run build:clean
```

### non-Windows 사용자를 위한 주의사항

non-Windows 플랫폼을 사용하여 **사용자 정의 아이콘이 있는** Windows를 위한 빌드를 하려면 [wine](https://www.winehq.org/)을 설치해야합니다. [More Info](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms).

### 디폴트 빌드 구성

[여기서](https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options) `electron-packager`의 옵션에 찾아서 `.electron-vue/build.config.js`에 추가하여 사용자 정의를 할 수 있습니다. 빌드 애플리케이션에 적용된 이름은 `package.json`의 `productName` 값으로 설정됩니다.

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

    // Save builds to `builds`
    out: path.join(__dirname, '../build'),

    // Overwrite existing builds
    overwrite: true,

    // Environment variable that sets platform
    platform: process.env.BUILD_TARGET || 'all'
}
```



