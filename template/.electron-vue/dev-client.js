const hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(event => {
  if (event.action === 'reload') {
    window.location.reload()
  }

  if (event.action === 'compiling') {
    console.log('restarting soon')
  }
})
