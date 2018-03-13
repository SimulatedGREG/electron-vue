# Bắt đầu

## Scaffolding

Bản mẫu (boilerplate) này được xây dựng như 1 mẫu cho [vue-cli](https://github.com/vuejs/vue-cli) và bao gồm các tùy chọn để tùy biến khung ứng dụng. Nó yêu cầu `node@^7` trở lên. electron-vue cũng khuyến khích sử dụng [yarn](https://yarnpkg.org) package manager để quản lý các dependency tốt hơn cũng như giúp giảm kích thước cho bản build cuối cùng bằng lệnh `yarn clean`

```bash
# Cài đặt vue-cli và boilerplate
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project

# Cài đặt dependency và chạy ứng dụng
cd my-project
yarn # hoặc npm install
yarn run dev # hoặc npm run dev
```

#### Làm việc với Electron

Mặc dù không bắt buộc, bạn nên khóa phiên bản electron lại sau khi tạo xong bản boilerplate. Nó sẽ giúp các nhà phát triển khác làm với chung một dự án sẽ không thể sử dụng các phiên bản electron khác nhau. Lí do là vì Electron công bố các bản phát hành mới khá nhanh nên tính năng cũng thay đổi nhanh. [Đọc thêm](http://electron.atom.io/docs/tutorial/electron-versioning/).

#### Lưu ý cho người dùng Windows

Nếu như bạn gặp lỗi có liên quan đến `node-gyp` trong khi đang cài đặt các package (khi chạy `npm install` hoặc `yarn`), thì có khả năng cao là bạn chưa cài đặt build tools thích hợp. Build tools bao gồm những thứ như Python và Visual Studio. Nhờ [@felixrieseberg](https://github.com/felixrieseberg), chúng ta có một vài package có thể đơn giản hóa công việc này.

Thứ mà chúng ta cần kiểm tra đầu tiên chính là phiên bản của npm không quá cũ (kiểm tra phiên bản bằng cách vào terminal và gõ `npm -v`), nếu cũ quá thì có thể cập nhật bằng [`npm-windows-upgrade`](https://github.com/felixrieseberg/npm-windows-upgrade). Nếu đang dùng `yarn` thì bạn có thể bỏ qua bước này.

Một khi đã hoàn thành, chúng ta tiếp tục cài đặt [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools), nó sẽ tự động cài đặt Visual C++ packages, Python, và những thứ khác cần thiết mà ta không cần phải cài đặt thủ công từng thứ một.

Lúc này thì mọi thứ đã cài đặt thành công, nếu như vẫn chưa thì bạn nên cài đặt Visual Studio. Lưu ý rằng đây không phải là vấn đề trực tiếp với electron-vue (Windows đôi khi khá là khó khăn trong việc cài đặt).
