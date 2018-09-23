# 파일 트리

### 개발 파일 트리

**Note**: 일부 파일,폴더는 `vue-cli` 스캐폴딩 중 선택한 설정에 따라 다를 수 있습니다..

```
my-project
├─ .electron-vue
│  └─ <build/development>.js files
├─ build
│  └─ icons/
├─ dist
│  ├─ electron/
│  └─ web/
├─ node_modules/
├─ src
│  ├─ main
│  │  ├─ index.dev.js
│  │  └─ index.js
│  ├─ renderer
│  │  ├─ components/
│  │  ├─ router/
│  │  ├─ store/
│  │  ├─ App.vue
│  │  └─ main.js
│  └─ index.ejs
├─ static/
├─ test
│  ├─ e2e
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ utils.js
│  ├─ unit
│  │  ├─ specs/
│  │  ├─ index.js
│  │  └─ karma.config.js
│  └─ .eslintrc
├─ .babelrc
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ package.json
└─ README.md
```

#### 프로덕션 빌드 파일 트리

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

여러분도 알 수 있듯이 거의 모든 것이 최종 프로덕션 빌드에서 제거 됩니다. 사용자가 큰 파일 크기로 부푼 소프트웨어를 다운로드하는 것을 원하지 않으므로 electron 앱을 배포 할 때는 거의 필수 입니다.




