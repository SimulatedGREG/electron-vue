# [`electron-builder`](https://github.com/electron-userland/electron-builder) 사용하기

`electron-builder`에 의해 생성 된 모든 빌드는`build` 디렉토리에서 찾을 수 있습니다.

#### 구축

```bash
npm run build
```

#### 압축을 푼 디렉토리 만들기

전체 설치 프로그램없이 간단한 실행 파일을 생성하십시오. 빠른 테스트에 유용합니다.

```bash
npm run build:dir
```

### 기본 건물 구성

`package.json`으로 더 설정할 수 있는 `electron-builders`의 옵션들을 [여기](https://github.com/electron-userland/electron-builder/wiki/Options)에 있습니다..

```js
"build": {
  "productName": "ElectronVue",
  "appId": "org.simulatedgreg.electron-vue",
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      },
      {
        "x": 130,
        "y": 150,
        "type": "file"
      }
    ]
  },
  "directories": {
    "output": "build"
  },
  "files": [
    "dist/electron",
    "node_modules/",
    "package.json"
  ],
  "mac": {
    "icon": "build/icons/icon.icns"
  },
  "win": {
    "icon": "build/icons/icon.ico"
  },
  "linux": {
    "icon": "build/icons"
  }
}
```

## CI를 이용한 자동화 된 배치

When using electron-vue's `electron-builder` configuration, you are also provided a `appveyor.yml` and `.travis.yml` for automated deployments. Both config files are setup for building your electron application and pushing artifacts to a GitHub release, Bintray, etc. Travis CI is used to build both `linux` and `darwin` \(macOS\) while AppVeyor is used to build `win32`. Both services are free for OSS projects.

electron-vue의 `electron-builder` 설정을 사용할 때 자동 배포를위한 `appveyor.yml` 과 `.travis.yml`도 제공됩니다. 
두 설정 파일은 일렉트론 애플리케이션을 빌드하고 GitHub 릴리즈, Bintray 등으로 유물을 밀어 넣기 위해 설정됩니다. 
Travis CI는 `linux`와`darwin(macOS)`를 빌드하는 데 사용되는 반면 AppVeyor는`win32` 를 빌드하는 데 사용됩니다..
두 서비스 모두 OSS 프로젝트에서 무료입니다.

#### Travis CI / AppVeyor 설정하기
   
1. [Travis CI](https://travis-ci.org/getting_started) / [AppVeyor](https://www.appveyor.com/)에서 계정을 만드십시오. 
2. 귀하의 일렉트론-뷰 프로젝트가있는 GitHub 저장소를 링크하십시오  
3. [https://github.com/settings/tokens](https://github.com/settings/tokens)를 방문하여 **새 토큰 생성**을 누르십시오\
(동일한 토큰을 Travis CI 및 AppVeyor 에도\).
    1. **토큰 설명**을 설정하십시오.
    2. **public\_repo** 범위를 확인하십시오. 
    3. **토큰을 생성하십시오.** 
4. 새 토큰을 복사하고 나중을 위해 저장하십시오. 
5. Travis CI / AppVeyor에 저장소 설정을 열고 새로운 **환경 변수**를 추가하십시오. 
    1. 변수 이름을 `GH_TOKEN`으로 설정하십시오 
    2. 변수의 값을 방금 작성한 GitHub 액세스 토큰으로 설정하십시오 
    3. 새 변수를 **저장**하고 암호화가 사용 가능한지 확인하십시오.

이 시점에서 모든 것이 설정되어야합니다. Travis CI / AppVeyor는 기본적으로`master` 브랜치에 대한 푸시를 감시합니다. 푸시가 이루어지면 Travis CI / AppVeyor는 리포지토리를 서버에 복제하고 빌드 프로세스를 시작합니다. 최종 단계에서 전자 빌더는 환경 변수 GH_TOKEN을보고 릴리즈 초안을 만들고 공개 GitHub 저장소에 아티팩트를 업로드합니다. 이 시점부터 초안 릴리스를 편집 한 다음이를 전세계에 게시 할 수 있습니다. 릴리스를 발표 한 후,`package.json`을 업데이트하여 향후 릴리스가 새로운 버전 번호로 표시되도록하십시오.

#### 자동 업데이트

Enabling your application to receive automatic updates is a super nice feature to have, but know that [**Code Signing**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing) is required. 
You can setup code signing by adding a few more environment variables based on what `electron-builder` needs described [here](https://www.electron.build/code-signing). Once you have your certificates setup, 
you can then install `electron-updater` and comment out the chunk of code at the bottom of `src/main/index.js` to enable auto updating.

응용 프로그램에서 자동 업데이트를 수신하도록 설정하는 것이 가장 좋은 기능이지만 [**코드 서명**](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)은 필수. 
`electronic builder`가 기술해야하는 [것](https://www.electron.build/code-igning)을 기반으로 몇 가지 환경 변수를 추가하여 코드 서명을 설정할 수 있습니다. 
일단 인증서를 설정하면`electron-updater`를 설치하고 `src/main/index.js`의 하단에 코드 덩어리를 주석 처리하여 자동 업데이트를 가능하게 할 수 있습니다.

대부분의 사람들과 같은 멋진 코드 서명 인증서가 없으면 GitHub API를 사용하여 새 릴리스를 확인할 수 있습니다. 새로운 릴리스가 발견되면 응용 프로그램 내에서 새 빌드를 다운로드하고 설치할 수있는 다운로드 페이지로 사용자를 안내하는 알림을 제공하십시오. `electron-builder`가 제공하는 놀라운 설치 프로그램 덕분에 사용자는 현재 버전을 제거 할 필요가 없으며 새 설치는 웹 저장소 또는 `userData` 파일을 계속 유지하면서 이전 버전을 대체합니다.