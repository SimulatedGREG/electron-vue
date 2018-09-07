# 디버깅

### 메인 프로세스

When running your application in development you may have noticed a message from the `main` process mentioning a remote debugger. Ever since the release of `electron@^1.7.2`, remote debugging over the Inspect API was introduced and can be easily accessed by opening the provided link with Google Chrome or through another debugger that can remotely attach to the process using the default port of 5858, such as Visual Studio Code.

```bash
┏ Electron -------------------

  Debugger listening on port 5858.
  Warning: This is an experimental feature and could change at any time.
  To start debugging, open the following URL in Chrome:
      chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:5858/22271e96-df65-4bab-9207-da8c71117641

┗ ----------------------------
```

### 프로덕션 빌드

###### Notice

프로덕션 환경에서 응용 프로그램을 디버그하는 것이 가능할 수도 있지만 개발 중에 발견 된 것과 비교하여 프로덕션 코드가 축소되어 읽을 수 없게됩니다.

##### `renderer` 프로세스

현재 개발중인 것보다 큰 차이점이 없습니다. [BrowserWindow APIs](https://electron.atom.io/docs/api/web-contents/#contentsopendevtoolsoptions)를 사용하여 개발자 도구를 간단하게 호출 할 수 있습니다. 초기 전자 - vue 셋업을 사용하여`src / main / index.js` 안에`new BrowserWindow` 구조 바로 뒤에 다음 코드 스 니펫을 추가하여 개발 도구를 실행시 강제로 열 수 있습니다.

```js
mainWindow.webContents.openDevTools()
```

##### `main` 프로세스

위에서 언급 한 것과 비슷하게 외부 디버거를`main` 프로세스에 연결하여 애플리케이션을 원격 디버깅 할 수도 있습니다. 
프로덕션 환경에서 디버거를 활성화하려면 `src/main/index.js`에서 `app` 가져 오기 다음에 추적 스니펫을 추가하면됩니다. 그런 다음 Chrome을 탐색하여 `chrome://inspect`하고 연결할 수 있습니다.

```js
app.commandLine.appendSwitch('inspect', '5858')
```



