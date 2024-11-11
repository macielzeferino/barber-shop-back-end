# Barber Shop API

## Descrição
API para gerenciamento de uma barbearia, incluindo funcionalidades para operações de clientes, profissionais e agendamentos. Este projeto é uma API backend desenvolvida com Node.js, Express e Sequelize, com PostgreSQL como banco de dados.

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- PostgreSQL
- dotenv
- cors

## Instalação

### Pré-requisitos
- Node.js instalado
- Banco de dados PostgreSQL configurado

### Passos para Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/barber_shop.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configuração do Ambiente:
   - Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente:
```env
DB_HOST=localhost
DB_USER=seuusuario
DB_PASSWORD=suasenha
DB_NAME=barber_shop
DB_PORT=5432
PORT=3000
```

4. Execute as Migrations:
```bash
npx sequelize-cli db:migrate
```

5. Inicie o Servidor:
```bash
node index.js
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoints

### Profissionais
- `POST /professionals`: Cria um novo profissional
- `GET /professionals`: Retorna a lista de todos os profissionais
- `GET /professionals/:id`: Retorna um profissional específico pelo id
- `PUT /professionals/:id`: Atualiza os dados de um profissional específico pelo id
- `DELETE /professionals/:id`: Deleta um profissional específico pelo id

### Clientes
- `POST /clients`: Cria um novo cliente
- `GET /clients`: Retorna a lista de todos os clientes
- `GET /clients/:id`: Retorna um cliente específico pelo id
- `PUT /clients/:id`: Atualiza os dados de um cliente específico pelo id
- `DELETE /clients/:id`: Deleta um cliente específico pelo id

### Agendamentos
- `POST /appointments`: Cria um novo agendamento
- `GET /appointments`: Retorna a lista de todos os agendamentos
- `GET /appointments/:id`: Retorna um agendamento específico pelo id
- `PUT /appointments/:id`: Atualiza os dados de um agendamento específico pelo id
- `DELETE /appointments/:id`: Deleta um agendamento específico pelo id

## Modelos

### Professional
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| id | INTEGER | Sim | Identificador único do profissional |
| name | STRING | Sim | Nome do profissional |
| available_schedules | JSON | Sim | Horários disponíveis |
| email | STRING | Sim | E-mail do profissional |
| password | TEXT | Sim | Senha do profissional |

### Client
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| id | INTEGER | Sim | Identificador único do cliente |
| name | STRING | Sim | Nome do cliente |
| email | STRING | Sim | E-mail do cliente |

### Appointment
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| id | INTEGER | Sim | Identificador único do agendamento |
| clientId | INTEGER | Sim | ID do cliente |
| professionalId | INTEGER | Sim | ID do profissional |
| date | DATE | Sim | Data do agendamento |
| time | TIME | Sim | Horário do agendamento |

## Exemplo de Requisição

### Criar um Profissional
```http
POST /professionals
```

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "senhaSegura123",
  "available_schedules": ["09:00", "13:00", "17:00"]
}
```

## Autor
Maciel Zeferino.