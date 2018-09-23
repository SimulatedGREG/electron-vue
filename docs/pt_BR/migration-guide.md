# Guia de migração

The following documentation attempts to explain how migrating your project _should_ be accomplished, but may not be a full proof method as overall project structure is always up for change.

A documentação a seguir tenta te explicar a migração do seu projeto que _should_ precisa ser completado, mas não e a prova de falhas o metodo ja que a estrutura do projeto esta sempre aberto a mudanças.

1. Inicie uma versão nova do electron-vue usando `vue init simulatedgreg/electron-vue my-project`
2. Copie por cima o projeto atual para a pasta `src` para a nova pasta do {tradução de scaffold} `src`
3. Copie sobre o `package.json` as dependencias do projeto atual para o novo {tradução de scaffold} `package.json`
4. Instale as dependencias com `yarn` ou `npm install`
5. Rode o projeto no modo de desenvolvimento com \(`yarn run dev` ou `npm run dev`\)
6. Olhe para o terminal para encontrar erros e resolver.

Como previamente mencionaddo acima, não tem metodo sem erros para fazer a migração para o novo {tradução de scaffold}, mas isso vai se tornar grandes passos para chegar o mais perto de ter tudo feito. Qualquer modificação pessoal para a estrutura do projeto ou assets vai ser totalmente problema seu e de sua equipe para migrar. Tenha total certeza de olhar toda a outra documentação, e ve se isso reflete a versão atual do electron-vue da branch `master`.
