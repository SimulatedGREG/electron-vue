# 로컬 파일 읽고 쓰기

`electron`을 사용하면 얻을 수있는 장점 중 하나는 사용자의 파일 시스템에 액세스 할 수 있다는 것입니다. 이렇게하면 로컬 시스템에서 파일을 읽고 쓸 수 있습니다. Chromium 제한을 피하고 애플리케이션의 내부 파일에 글을 쓰려면 `electron`의 API, 특히 [`app.getPath(name)`](https://electron.atom.io/docs)를 사용해야합니다. / api / app / # appgetpathname) 함수를 호출합니다. 이 도우미 메소드는 사용자의 데스크탑, 시스템 임시 파일 등과 같은 시스템 디렉토리에 대한 파일 경로를 가져올 수 있습니다.

### 사용 예



애플리케이션 용 로컬 데이터베이스 저장소를 갖기를 원한다고 가정 해 봅시다. 이 예제에서 우리는 [`nedb`](https://github.com/louischatriot/nedb)를 가지고 설명 할 것입니다.

```bash
yarn add nedb # or npm install nedb --save
```

**src/renderer/datastore.js**

여기서 우리는 NeDB를 설정하고 그것을 `userData` 디렉토리로 향하게합니다. 이 공간은 응용 프로그램 용으로 특별히 예약되어 있으므로 다른 프로그램이나 다른 사용자 상호 작용이이 파일 공간을 변경해서는 안된다는 확신을 가질 수 있습니다. 여기서 우리는`renderer` 프로세스에서 `datastore.js`를 가져 와서 그것을 소비 할 수 있습니다.

```js
import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

export default new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath('userData'), '/data.db')
})
```

**src/renderer/main.js**

이 단계를 더 진행하기 위해 데이터 저장소를 `src/renderer/main.js`로 가져 와서 Vue 프로토 타입에 첨부 할 수 있습니다. 이렇게하면 모든 구성 요소 파일에서`this.$db`를 사용하여 데이터 저장소 API에 액세스 할 수있게되었습니다.

```js
import db from './datastore'

/* Other Code */

Vue.prototype.$db = db
```



