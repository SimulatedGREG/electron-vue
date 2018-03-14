# Gỡ lỗi

### Quá trình chính

Trong khi đang phát triển ứng dụng, bạn có thể thấy thông báo từ quy trình chính (main process) đề cập đến việc gỡ lỗi (debug) từ xa. Kể từ phiên bản `electron@^1.7.2`, debug từ xa thông qua Inspect API đã được giới thiệu và có thể truy cập một cách dễ dàng bằng cách mở liên kết được cung cấp với Google Chrome, hoặc qua một trình sửa lỗi khác mà ở từ xa có thể kèm theo quá trình sử dụng cổng port mặc định là 5858, như Visual Studio Code.

```bash
┏ Electron -------------------

  Debugger listening on port 5858.
  Warning: This is an experimental feature and could change at any time.
  To start debugging, open the following URL in Chrome:
      chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:5858/22271e96-df65-4bab-9207-da8c71117641

┗ ----------------------------
```

### Xây dựng sản phẩm

###### Lưu ý

Mặc dù hoàn toàn có thể debug ứng dụng của bạn khi đã xuất thành sản phẩm, tuy nhiên code trong sản phẩm đã được thu gọn để tối ưu hiệu năng, nên có khả năng cao là không đọc được so với code trong khi bạn đang phát triển.

##### `renderer` Process

Không có gì khác biệt ở đây so với quá trình phát triển. Bạn có thể gọi dev tools bằng cách dùng [`BrowserWindow` APIs](https://electron.atom.io/docs/api/web-contents/#contentsopendevtoolsoptions). Nếu như đang sử dụng thiết lập ban đầu của electron-vue, bạn có thể thêm đoạn code sau vào trong `src/main/index.js`
ở sau đoạn `new BrowserWindow`, điều này sẽ khiến dev tools mở ngay lập tức khi vừa mới khởi động.

```js
mainWindow.webContents.openDevTools()
```

##### `main` Process

Giống như những gì đã đề cập ở trên, bạn cũng có thể đính kèm thêm trình sửa lỗi vào `main` process (quá trình chính) nhằm debug ứng dụng từ xa. Để kích hoạt trình sửa lỗi trong sản phẩm, bạn có thể thêm đoạn code này vào sau `import app` ở trong file `src/main/index.js`:

```js
app.commandLine.appendSwitch('inspect', '5858')
```

Sau đó bạn có thể chuyển qua Google Chrome, vào `chrome://inspect` và kết nối.



