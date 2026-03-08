# Orders API — Desafio Jitterbit

REST API de gerenciamento de pedidos desenvolvida com Node.js, Express e MongoDB, seguindo os princípios de Clean Architecture.

## Tecnologias

- **Node.js** + **Express**
- **MongoDB** via Docker
- **Mongoose** (ODM)
- **JWT** (autenticação)
- **Joi** (validação de request)
- **Swagger UI** (documentação interativa)

## Arquitetura

O projeto segue Clean Architecture com separação em três camadas:

```
src/
├── domain/                    # Regras de negócio puras
│   ├── entities/              # Entidades
│   ├── exceptions/            # Exceções personalizadas
│   └── repositories/          # Contratos (interfaces)
├── application/               # Casos de uso e DTOs
│   ├── dtos/                  # Mapeamento request ↔ entidade ↔ response
│   └── usecases/              # Lógica de aplicação
└── infrastructure/            # Implementações externas
    ├── database/              # MongoDB (Mongoose)
    └── http/                  # Express (rotas, controllers, middlewares)
```

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

## Como rodar

**1. Clone o repositório**

```bash
git clone https://github.com/LeandroSAlmeida/jitterbit-challenge.git
cd jitterbit-challenge
```

**2. Configure as variáveis de ambiente**

```bash
cp .env.example .env
```

**3. Suba o MongoDB com Docker**

```bash
docker-compose up -d
```

**4. Instale as dependências**

```bash
npm install
```

**5. Inicie a aplicação**

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Documentação

Acesse o Swagger UI em:

```
http://localhost:3000/api-docs
```

## Autenticação

Todos os endpoints de `/order` requerem autenticação JWT.

**1. Obtenha o token:**

```http
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

**2. Use o token nas requisições:**

```http
Authorization: Bearer <token>
```

No Swagger UI, clique em **Authorize** e insira o token.

## Endpoints

| Método | Rota            | Descrição               | Auth |
|--------|-----------------|-------------------------|------|
| POST   | /auth/login     | Gerar token JWT         | —    |
| POST   | /order          | Criar pedido            | JWT  |
| GET    | /order/list     | Listar todos os pedidos | JWT  |
| GET    | /order/:orderId | Buscar pedido por ID    | JWT  |
| PUT    | /order/:orderId | Atualizar pedido        | JWT  |
| DELETE | /order/:orderId | Excluir pedido          | JWT  |

## Formato do pedido

**Request (POST /order):**

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

**Response:**

```json
{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

## Variáveis de ambiente

| Variável        | Descrição                        |
|-----------------|----------------------------------|
| `PORT`          | Porta da aplicação               |
| `MONGO_URI`     | URI de conexão com o MongoDB     |
| `JWT_SECRET`    | Chave secreta para assinar o JWT |
| `JWT_EXPIRES_IN`| Tempo de expiração do token      |
| `AUTH_USERNAME` | Usuário para login               |
| `AUTH_PASSWORD` | Senha para login                 |
