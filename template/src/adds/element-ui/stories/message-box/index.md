# Message Box

http://element.eleme.io/#/en-US/component/message-box#messagebox

```html
<el-button type="text" @click="open">Click to open the Message Box</el-button>
```

```js
export default {
  methods: {
    open() {
      this.$alert('This is a message', 'Title', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
```

## Message Box Confirm

```html
<el-button type="text" @click="open2">Click to open the Message Box</el-button>
```

```js
export default {
  methods: {
    open2() {
      this.$confirm(
        'This will permanently delete the file. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          })
        })
    }
  }
}
```

## Message Box Prompt

```html
<el-button type="text" @click="open3">Click to open Message Box</el-button>
```

```js
export default {
  methods: {
    open3() {
      this.$prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email'
      })
        .then(value => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          })
        })
    }
  }
}
```

## Cusstom Message Box

```html
<el-button type="text" @click="open4">Click to open Message Box</el-button>
```

```js
export default {
  methods: {
  open4() {
      const h = this.$createElement
      this.$msgbox({
        title: 'Message',
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'Loading...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  }
}
```

## Cusstom HTML Box

```html
<el-button type="text" @click="open5">Click to open Message Box</el-button>
```

```js
export default {
  methods: {
    open5() {
      this.$alert(
        '<strong>This is <i>HTML</i> string</strong>',
        'HTML String',
        {
          dangerouslyUseHTMLString: true
        }
      )
    }
  }
}
```