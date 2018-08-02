# 앱 만들기

electron-vue supports both [electron-packager](https://github.com/electron-userland/electron-packager) and [electron-builder](https://github.com/electron-userland/electron-builder) to build and distribute your production ready application. Both build tools are backed by the amazing [@electron-userland](https://github.com/electron-userland) community and each have detailed documentation. During `vue-cli` scaffolding you will be asked which builder you will want to use.

electron-vue는 [electron-packager](https://github.com/electron-userland/electron-packager)와 [electron-builder](https://github.com/electron-userland/electron-builder)를 모두 지원합니다. 
생산 준비 애플리케이션을 제작하고 배포 할 수 있습니다. 
두 가지 빌드 도구는 놀라운 [@electronic-userland](https://github.com/electron-userland) 커뮤니티에 의해 뒷받침되며 각각에는 자세한 문서가 있습니다. `vue-cli` 뼈대 구축 중에 어떤 빌더를 사용할지 묻습니다.

## [`electron-packager`](using-electron-packager.md)

일렉트론 애플리케이션을 처음 사용하거나 간단한 실행 파일 만 만들 필요가 있다면 `electron-packager`가 당신의 필요에 완벽합니다.

## [`electron-builder`](using-electron-builder.md)

전체 인스톨러, 자동 업데이트 지원, Travis CI 및 AppVeyor를 이용한 CI 구축, 또는 네이티브 노드 모듈 재구성 자동화를 원한다면 `electron-builder` 가 필요합니다.
