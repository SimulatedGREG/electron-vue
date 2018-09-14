# Main Process

> Electron에서 package.json의 main 스크립트를 실행하는 프로세스를 main 프로세스라고 합니다. main 프로세스에서 실행되는 스크립트는 웹 페이지를 생성하여 GUI를 표시 할 수 있습니다.

[**Electron 문서**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)**로 부터**

---

`main` 프로세스는 근본적으로 완전한 Node 환경이기 때문에 두 파일 이외의 초기 프로젝트 구조는 존재하지 않습니다.

#### `src/main/index.js`

이 파일은 애플리케이션의 main 파일이며 `electron`을 부팅하는 파일 입니다. `webpack`의 프로덕션 용 엔트리 파일로도 사용됩니다. 모든 `main` 프로세스 작업은 여기서 시작해야 합니다.

#### `app/src/main/index.dev.js`

이 파일은 특별히 `electron-debug` & `vue-devtools`를 설치하기 때문에 개발에만 사용됩니다. 이 파일을 수정할 필요가 없지만 개발 요구사항을 확장하는 데 사용할 수 있습니다.

## `__dirname` & `__filename` 사용에 관하여

`webpack`을 사용하여 `main` 프로세스는 번들되기 때문에, `__dirname` & `__filename`은 프로덕션에서 예상 값을 **제공하지 않습니다**. [**File Tree**](/file-tree.md)를 보면, main.js가 `dist/electron` 폴더 안에 위치 함을 알 수 있습니다. 이 지식을 바탕으로 적절하게 `__dirname` & `__filename`를 사용하세요.

`static/` **assets 디렉토리에 대한 경로가 필요한 경우, **[**Static Assets 사용법**](/using-static-assets.md)을 읽으세요. __static 변수는 정말 유용합니다.**

```
app.asar
├─ dist
│  └─ electron
│     ├─ static/
│     ├─ index.html
│     ├─ main.js
│     └─ renderer.js
├─ node_modules/
└─ package.json
```



