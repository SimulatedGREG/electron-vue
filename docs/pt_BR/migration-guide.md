# Guia de migração

A documentação a seguir tenta explicar a migração do seu projeto deve ser realizada. Esse método não é a prova de falhas, já que a estrutura do projeto está sempre aberta a mudanças. 

1. Inicie uma versão nova do electron-vue usando `vue init simulatedgreg/electron-vue my-project`
2. Copie a pasta `src` do seu projeto atual para a nova pasta do `src` gerada pelo _scaffold_
3. Copie sobre o `package.json` as dependencias do projeto atual para o novo `package.json` gerado pelo _scaffold_.
4. Instale as dependencias com `yarn` ou `npm install`
5. Rode o projeto no modo de desenvolvimento com \(`yarn run dev` ou `npm run dev`\)
6. Olhe para o terminal para encontrar erros.

Como previamente mencionado acima, não tem metodo sem erros para fazer a migração para a nova versão do _scaffold_ , mas é a melhor forma de se começar.
Qualquer modificação pessoal para a estrutura do projeto ou assets vai ser totalmente problema seu e de sua equipe para migrar. 
Tenha total certeza de olhar toda a outra documentação, e veja se isso reflete a versão atual do electron-vue da branch `master`.
