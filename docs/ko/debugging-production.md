# Debugging

### Main Process

개발 중인 애플리케이션을 실행할 때, 여러분은 원격 디버거를 언급하는 `main` 프로세스에서 메시지를 발견했을 수도 있습니다. `electron@^1.7.2`가 출시 된 이래로 Inspect API를 통한 원격 디버깅이 도입되었으며 Google 크롬 또는 기본 포트 5858을 사용하는 프로세스(Visual Studio Code)에 원격으로 연결할 수 있는 다른 디버거를 제공된 링크를 열면 쉽게 액세스 할 수 있습니다.

```bash
┏ Electron -------------------

  Debugger listening on port 5858.
  Warning: This is an experimental feature and could change at any time.
  To start debugging, open the following URL in Chrome:
      chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:5858/22271e96-df65-4bab-9207-da8c71117641

┗ ----------------------------
```

### Production Builds

###### Notice

프로덕션 환경에서 애플리케이션을 디버그하는 것이 가능할 수도 있지만 개발 중에 발견 된 것과 비교하여 프로덕션 코드가 축소되어  읽을 수 없다는 것을 알고 있으세요.

##### `renderer` Process

현재 개발중인 것보다 큰 차이점이 없습니다. [`BrowserWindow` APIs](https://electron.atom.io/docs/api/web-contents/#contentsopendevtoolsoptions)를 사용하여 개발자 도구를 간단하게 호출 할 수 있습니다. 초기 electron-vue 설정을 사용하여 `src/main/index.js` 안에 다음과 같은 코드 스니펫을 추가 할 수 있습니다. `new BrowserWindow` 구축 직후, 개발 도구를 강제로 열 수 있습니다.

```js
mainWindow.webContents.openDevTools()
```

##### `main` Process

위에서 언급 한 것과 비슷하게 `main` 프로세스에 외부 디버거를 연결하여 애플리케이션을 원격 디버깅 할 수도 있습니다. 프로덕션 환경에서 디버거를 활성화하려면 `src/main/index.js`에서 `app`을 import 후에 다음 스니펫을 추가하면 됩니다. 그런 다음 Google 크롬에서 `chrome://inspect`를 통해 연결하여 탐색 할 수 있습니다.

```js
app.commandLine.appendSwitch('inspect', '5858')
```



