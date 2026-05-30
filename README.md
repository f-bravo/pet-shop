````md
# Pet Shop

Sistema fullstack para gerenciamento de agendamentos de um pet shop.

A aplicação permite cadastrar, listar, editar e remover agendamentos, organizando os atendimentos por data e por período do dia: manhã, tarde e noite.

## Problema resolvido

Pequenos pet shops podem ter dificuldade para organizar agendamentos feitos por telefone, mensagens ou anotações manuais.

Este projeto centraliza os agendamentos em uma aplicação web, facilitando a visualização dos atendimentos do dia e reduzindo conflitos de horário.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma ORM
- PostgreSQL
- Docker
- Zod
- React Hook Form

## Funcionalidades

- Cadastro de agendamentos
- Listagem de agendamentos por data
- Organização dos agendamentos por manhã, tarde e noite
- Edição de agendamentos
- Remoção de agendamentos
- Validação dos campos do formulário
- Bloqueio de datas e horários no passado
- Bloqueio de agendamento em horário já reservado

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- pnpm
- Docker Desktop

O projeto foi desenvolvido utilizando `pnpm` como gerenciador de pacotes.

## Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/f-bravo/pet-shop.git
```

Acesse a pasta do projeto:

```bash
cd pet-shop
```

Instale as dependências:

```bash
pnpm install
```

Crie o arquivo `.env` com base no `.env.example`:

```bash
copy .env.example .env
```

Suba o banco de dados PostgreSQL com Docker:

```bash
docker compose up -d
```

Confira se o container está rodando:

```bash
docker ps
```

Execute as migrations do Prisma:

```bash
pnpm prisma migrate dev
```

Gere o Prisma Client:

```bash
pnpm prisma generate
```

Inicie a aplicação:

```bash
pnpm dev
```

Acesse no navegador:

```txt
http://localhost:3000
```

## Variáveis de ambiente

O arquivo `.env` não é enviado ao GitHub.

Para executar o projeto localmente, crie o arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

Variável necessária:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/petshop?schema=public"
```

## Banco de dados

O projeto utiliza PostgreSQL com Prisma ORM.

O banco é executado localmente com Docker, usando as informações definidas no arquivo `docker-compose.yml`.

A principal tabela do sistema é `appointments`, responsável por armazenar os agendamentos do pet shop.

Campos principais:

- nome do tutor
- nome do pet
- telefone
- descrição do atendimento
- data e horário do agendamento

## Scripts disponíveis

| Comando                   | Descrição                                 |
| ------------------------- | ----------------------------------------- |
| `pnpm dev`                | Inicia o servidor de desenvolvimento      |
| `pnpm build`              | Gera a versão de produção                 |
| `pnpm start`              | Executa a versão de produção após o build |
| `pnpm lint`               | Executa a verificação com ESLint          |
| `pnpm format`             | Formata os arquivos com Prettier          |
| `pnpm validate:typecheck` | Verifica erros de TypeScript              |

## Validação opcional de produção

Após testar a aplicação em modo desenvolvimento, é possível validar a versão de produção localmente.

Gere o build:

```bash
pnpm build
```

Inicie a aplicação em modo produção:

```bash
pnpm start
```

Acesse novamente:

```txt
http://localhost:3000
```

## Testes manuais sugeridos

| Teste                                     | Resultado esperado                           |
| ----------------------------------------- | -------------------------------------------- |
| Criar um agendamento válido               | O agendamento deve aparecer na agenda        |
| Criar agendamento com campo vazio         | O sistema deve exibir erro de validação      |
| Criar agendamento em data passada         | O sistema deve bloquear                      |
| Criar dois agendamentos no mesmo horário  | O sistema deve impedir duplicidade           |
| Alterar a data da agenda                  | A listagem deve mudar conforme a data        |
| Criar agendamentos em horários diferentes | Eles devem aparecer em manhã, tarde ou noite |
| Editar um agendamento                     | Os dados devem ser atualizados               |
| Remover um agendamento                    | O agendamento deve sair da listagem          |

## Problemas comuns

### Porta 5432 já está em uso

O projeto utiliza PostgreSQL na porta `5432`.

Caso já exista outro PostgreSQL rodando na máquina, será necessário parar o serviço existente ou alterar a porta no `docker-compose.yml` e na variável `DATABASE_URL`.

### Erro de conexão com o banco

Verifique se o container do banco está rodando:

```bash
docker ps
```

Se necessário, suba novamente:

```bash
docker compose up -d
```

### Tabelas não existem

Execute as migrations do Prisma:

```bash
pnpm prisma migrate dev
```

### Prisma Client não encontrado

Gere o Prisma Client:

```bash
pnpm prisma generate
```

### Dependências não instaladas

Execute novamente:

```bash
pnpm install
```

## Estrutura principal

```txt
prisma/
  schema.prisma
  migrations/

src/
  app/
    actions.ts
    page.tsx

  components/
    appointment-card/
    appointment-form/
    date-picker/
    header/
    period-section/

  generated/
    prisma/

  lib/
    prisma.ts

  types/
    appointment.ts

  utils/
    appointmets-utils.ts
```

## Apresentação do projeto

O projeto será apresentado em vídeo, demonstrando:

- explicação do problema resolvido;
- tecnologias utilizadas;
- estrutura fullstack da aplicação;
- funcionamento do banco de dados;
- cadastro, edição e remoção de agendamentos;
- testes manuais da aplicação em funcionamento;
- validação local do projeto após clone, instalação, Docker, Prisma e execução da aplicação.
````
