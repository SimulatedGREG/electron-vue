# Read & Write Local Files

`electron` 사용의 큰 이점 중 하나는 사용자의 파일 시스템에 액세스 할 수 있다는 것 입니다. 여러분은 로컬 시스템에서 파일을 읽고 쓸 수 있습니다. Chromium 제한을 피하고 애플리케이션의 내부 파일에 글을 쓰려면 `electron`의 API, 특히 [`app.getPath(name)`](https://electron.atom.io/docs/api/app/#appgetpathname) 함수를 사용해야합니다. 이 도우미 메소드는 사용자의 데스크탑, 시스템 임시 파일 등과 같은 시스템 디렉토리에 대한 파일 경로를 가져올 수 있습니다.

### Use Case

애플리케이션를 위한 로컬 데이터베이스 저장소를 갖기를 원한다고 가정 해 봅시다. 이 예제에서는 [`nedb`](https://github.com/louischatriot/nedb)를 사용하여 시연합니다.

```bash
yarn add nedb # or npm install nedb --save
```

**src/renderer/datastore.js**

여기서는 NeDB를 설정하고 `userData` 디렉토리를 가리 킵니다. 이 공간은 애플리케이션을 위해 특별히 예약되어 있습니다. 그러므로 다른 프로그램이나 다른 사용자의 상호작용이 이 파일 공간을 변경해서는 안된다는 확신을 가질 수 있습니다. `renderer` 프로세스에서 `datastore.js`를 가져와서 소비 할 수 있습니다.

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

단계를 더 진행하기 위해, datastore를 `src/renderer/main.js`로 가져와서 Vue 프로토타입에 연결할 수 있습니다. 이렇게 하면, 모든 component 파일에서 `this.$db`를 사용하여 datastore API에 액세스 할 수 있게되었습니다.

```js
import db from './datastore'

/* Other Code */

Vue.prototype.$db = db
```



