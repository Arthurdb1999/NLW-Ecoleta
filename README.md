# Ecoleta - Next Level Week #01

Ecoleta - Aplicação que disponibiliza pontos de coleta de materiais inutilizados. Projeto realizado durante a Next Level Week, powered by Rocketseat.

Go to [Official Project Page](https://github.com/Rocketseat/nlw-01-booster), by Rocketseat 🚀

Feature não adicionadas no projeto oficial: Select Picker no React-native, para selecionar UF's e Cidades, semelhante ao que é feito no frontend.

O projeto foi completamente implementado de acordo com as aulas, com exceção da validação de campos no backend utilizando Celebrate e Joi. O motivo para isso é o fato de já possuir um projeto em meu Github que implementa essas bibliotecas, desenvolvido na Semana Omnistack 11, by Rocketseat: [Be the Hero](https://github.com/Arthurdb1999/Omnistack11)

## Executar aplicação em ambiente de desenvolvimento

Instalar dependências:

- `cd NLW-Ecoleta/backend`
- `yarn install` ou `npm install`
- `cd NLW-Ecoleta/frontend`
- `yarn install` ou `npm install`
- `cd NLW-Ecoleta/mobile`
- `yarn install` ou `npm install`

Executar migrations, seeds e backend

- `cd NLW-Ecoleta/backend`
- `yarn knex:migrate`
- `yarn knex:seed`
- `yarn dev` ou `npm run dev`

Executar frontend

- `cd NLW-Ecoleta/frontend`
- `yarn start` ou  `npm start`

Executar mobile

- `cd NLW-Ecoleta/mobile`
- `yarn start` ou  `npm start`
- Instalar o aplicativo Expo no seu smartphone e ler o QR Code que aparecerá na tela
- Configurar o IP no arquivo [api.js](https://github.com/Arthurdb1999/NLW-Ecoleta/blob/master/mobile/src/services/api.ts)

## Detalhamento das rotas

Se encontra no arquivo [*Insomnia_NLW-Ecoleta.json*](https://github.com/Arthurdb1999/NLW-Ecoleta/blob/master/backend/Insomnia_NLW-Ecoleta.json) e pode ser acessada através da instalação do software [Insomnia](https://insomnia.rest)

***

🚀 Todos os créditos à Rocketseat, empresa idealizadora da Next Level Week! 
