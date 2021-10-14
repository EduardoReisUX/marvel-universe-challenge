# Desafio Pedido Pago: Marvel Universe

## Descrição do projeto

Este projeto consome a API pública da Marvel e lista informações como characters, comics, events, etc.

Construído com Nextjs e TypeScript, os requests são feitos com Axios configurado para utilizar a key dentro de `.env.local` e a UI foi feita com Material-ui.

## Como instalar e rodar na própria máquina:

- `git clone https://github.com/EduardoReisUX/marvel-universe-challenge.git`
- `yarn install`
- Criar um arquivo `.env.local` e nela colocar sua PRIVATE_KEY da Marvel

```javascript
PRIVATE_KEY = xxx;
```

- Ir até `pages/api/index.ts` e colocar sua PUBLIC_KEY da Marvel

```javascript
const PUBLIC_KEY = "Sua PUBLIC_KEY da Marvel aqui";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
```

- `yarn dev` para começar um server de desenvolvimento local
