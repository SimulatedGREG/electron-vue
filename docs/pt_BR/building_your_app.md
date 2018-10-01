# Construindo seu App

electron-vue dá suporte aos dois [electron-packager](https://github.com/electron-userland/electron-packager) e [electron-builder](https://github.com/electron-userland/electron-builder) para construir e distruibir sua aplicação pronta para produção. As duas ferrametas para buildar são apoiadas pela incrível comunidade [@electron-userland](https://github.com/electron-userland) e tem uma documentação detalhada. Durante `vue-cli` a estruturação você será perguntado quanto ao builder que deseja usar.

## [`electron-packager`](using-electron-packager.md)

Se você está contruindo uma nova aplicação electron ou apenas precisa criar um simples executável, então `electron-packager` é perfeito para você.

## [`electron-builder`](using-electron-builder.md)

Se você está olhando para instaladores completos, auto-update suporte, construtores CI com Travis CI & AppVeyor, ou automação de reconstrução nativa de node modules, então `electron-builder` é o que você precisa.
