# Notification

http://element.eleme.io/#/en-US/component/notification#notification

```html
<el-button plain @click="open">
  Closes automatically
</el-button>
<el-button plain @click="open2">
  Won't close automatically
</el-button>
```

```js
export default {
  methods: {
    open() {
      const h = this.$createElement

      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
      })
    },

    open2() {
      this.$notify({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0
      })
    }
  }
}
```

## Notifcation Types

```html
<el-button plain @click="open3">
  Success
</el-button>
<el-button plain @click="open4">
  Warning
</el-button>
<el-button plain @click="open5">
  Info
</el-button>
<el-button plain @click="open6">
  Error
</el-button>
```

```js
export default {
  methods: {
   open3() {
      this.$notify({
        title: 'Success',
        message: 'This is a success message',
        type: 'success'
      })
    },

    open4() {
      this.$notify({
        title: 'Warning',
        message: 'This is a warning message',
        type: 'warning'
      })
    },

    open5() {
      this.$notify.info({
        title: 'Info',
        message: 'This is an info message'
      })
    },

    open6() {
      this.$notify.error({
        title: 'Error',
        message: 'This is an error message'
      })
    }
  }
}
```

## Notification Custom Position

```html
<el-button plain @click="open7">
  Top Right
</el-button>
<el-button plain @click="open8">
  Bottom Right
</el-button>
<el-button plain @click="open9">
  Bottom Left
</el-button>
<el-button plain @click="open10">
  Top Left
</el-button>
```

```js
export default {
  methods: {
    open7() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top right corner"
      })
    },

    open8() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the bottom right corner",
        position: 'bottom-right'
      })
    },

    open9() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the bottom left corner",
        position: 'bottom-left'
      })
    },

    open10() {
      this.$notify({
        title: 'Custom Position',
        message: "I'm at the top left corner",
        position: 'top-left'
      })
    }
  }
}    
```

## Use custom HTML

```html
<el-button plain @click="open12">
  Use HTML String
</el-button>
```

```js
export default {
  methods: {
    open12() {
      this.$notify({
        title: 'HTML String',
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>'
      })
    }
  }
}
```