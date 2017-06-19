# Settings

Settings can be anything that needs to be set when running app, when it's built and packaged.  
It can be the url of a server, the color of background, the size of a window, ...

## Usage

Edit `settings/settings.default.json` to add settings.  
For this example, we will use

```
{
  "service": {
    "api": {
      "url": "https://staging.myserver.com"
    }
  }
}
```

In your code, get the setting with 

```
const remote = require('electron').remote
settings = remote.getGlobal('settings')
console.log(settings.service.api.url)
```

## Load other settings

`settings/settings.default.json` should be added to your repo and stores the default settings.

To load custom settings, you can use `settings/settings.json` with custom settings that you won't add in your repo.  

Or specify settings on the command line:

### Command line parameters for an other json file
Example:  
`$ yarn run dev -- --settings settings/settings.dev.json` to specify a settings file  

### Environment variables
Example:  
`$ service_api_url="https://staging2.myserver.com" yarn run dev`  

### Command line parameters (argv)
Example:  
`$ yarn run dev -- --service.api.url "https://staging2.myserver.com"` to specify a field  

## In production

Settings are loaded the same way in production, nothing changes in your code.

### Inside the build

`settings/settings.default.json` is in `resources/app.asar.unpacked`, and is automatically loaded. 
User can add `resources/app.asar.unpacked/settings/settings.json` and it will be loaded too.

### From command line

```
$ ./my-app/my-app -- --settings settings/settings.prod.json
$ service_api_url="https://myserver.com" ./my-app/my-app
$ ./my-app/my-app -- --service.api.url "https://myserver.com"
```

## Settings for window and chromium flags

You can use settings to change window options and chromium flags.
For example, if you want a 1920x1080 window with pinch disabled, webSecurity disabled, and overswipe history disabled, you can add this to your settings:

```
{
  "window" : {
    "width": 1920,
    "height": 1080,
    "webPreferences": {
      "webSecurity": false
    }
  },
  "appendSwitch": {
    "--disable-pinch": ""
  },
  "appendArgument": [
    "--overscroll-history-navigation=0"
  ]
}

```
## More info on standard-settings

To know more about `standard-settings` and the overriding settings system, check [standard-settings](https://github.com/soixantecircuits/standard-settings)


