# 주 처리

> In Electron, the process that runs package.json’s main script is called the main process. The script that runs in the main process can display a GUI by creating web pages.

**From the** [**Electron Documentation**](http://electron.atom.io/docs/tutorial/quick-start/#main-process)

---

Since the `main` process is essentially a full node environment, there is no initial project structure other than two files.

#### `src/main/index.js`

이 파일은 어플리케이션의 주 파일이며, `electron` 이 부팅되는 파일이기도 하다. 또한 모든 제품에 대한 `webpack`'의 등재 파일로 사용된다. 모든 `main` 처리는 여기에서 시작 되어야 한다.

#### `app/src/main/index.dev.js`

이 파일은 개발 시 `electron-debug` & `vue-devtools` 를 설치하는데만 사용된다. 이 파일을 수정할 필요가 전혀 없지만, 개발환경 요구사항을 확장하기 위해서 사용될 수 있다.   

##  `__dirname` & `__filename` 를 사용하는데 관한 주제

`main` 프로세스가 `webpack` 을 사용해 번들되기 때문에,  `__dirname` 과 `__filename` 사용은 제품환경에서 기대 값을 제공하지 **않을 것이다.** Referring to the [**File Tree**](/file-tree.md), 당신은 제품환경에서 `main.js`  가 `dist/electron` 폴더 내부에 위치하게 된다는 것을 알게 될 거다. Based on this knowledge, use `__dirname` & `__filename` accordingly.

**If you are in need of a path to your `static/` assets directory, make sure to read up on **[**Using Static Assets**](/using-static-assets.md)** to learn about the super handy `__static` variable.**
**만약  `static/` 에셋 디렉토리로 향하는 경로가 필요하다면, 무지 편리한 `__static` 변수에 관해 배우기 위해 **[**Using Static Assets**](/using-static-assets.md)** 를 읽어봐라**

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



