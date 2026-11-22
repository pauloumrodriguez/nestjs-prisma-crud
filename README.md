# NestJS + Prisma CRUD API

A REST API for managing employees, built with [NestJS](https://nestjs.com/), [Prisma](https://www.prisma.io/) and PostgreSQL ([Neon](https://neon.tech/)).

> **Learning project.** I built this by following the NestJS course by Dave Gray ([video](https://www.youtube.com/watch?v=8_X0nSrzrCw) · [course repo](https://github.com/gitdagray/nestjs-course)), committing step by step and tagging each milestone with [Semantic Versioning](https://semver.org/).

## Features

- Full CRUD for employees, persisted in PostgreSQL through Prisma
- Filter employees by role (`INTERN`, `ENGINEER`, `ADMIN`)
- Rate limiting with `@nestjs/throttler` (per-route limits)
- Custom logger that writes to the console and to a log file
- Global exception filter that returns a consistent JSON error format
- Database migrations managed by Prisma Migrate

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | NestJS 12, TypeScript |
| Database | PostgreSQL (Neon), Prisma 6 |
| Validation | class-validator, class-transformer |
| Testing | Vitest, Supertest |
| Tooling | Prettier, oxlint |

## Getting started

### Prerequisites

- A recent LTS version of [Node.js](https://nodejs.org/) and npm
- A PostgreSQL database (a free [Neon](https://neon.tech/) project works)

### Installation

```bash
git clone https://github.com/pauloumrodriguez/nestjs-prisma-crud.git
cd nestjs-prisma-crud
npm install
```

### Environment variables

Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Pooled connection string, used by the application |
| `DATABASE_URL_UNPOOLED` | Direct connection string, used by Prisma Migrate |
| `PORT` | Optional. Defaults to `3000` |

> Never commit your `.env` file. It is already listed in `.gitignore`.

### Database setup

```bash
npx prisma migrate dev
```

### Run the app

```bash
# development (watch mode)
npm run start:dev

# production
npm run build
npm run start:prod
```

The API is available at `http://localhost:3000/api`.

## API endpoints

All routes are prefixed with `/api`.

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/employees` | Create an employee |
| `GET` | `/api/employees` | List employees (optional `?role=ADMIN`) |
| `GET` | `/api/employees/:id` | Get one employee |
| `PATCH` | `/api/employees/:id` | Update an employee |
| `DELETE` | `/api/employees/:id` | Delete an employee |

**Example request**

```bash
curl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane@example.com", "role": "ENGINEER"}'
```

**Error format**

```json
{
  "statusCode": 422,
  "timeStamp": "2026-11-22T20:59:00.039Z",
  "path": "/api/employees?role=INVALID",
  "response": "..."
}
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run start:dev` | Start in watch mode |
| `npm run build` | Compile the project |
| `npm run start:prod` | Run the compiled app |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Lint the code |
| `npm run format` | Format the code with Prettier |

## Versioning

This project follows [Semantic Versioning](https://semver.org/) and [Conventional Commits](https://www.conventionalcommits.org/). See the [tags](https://github.com/pauloumrodriguez/nestjs-prisma-crud/tags) for the history of each milestone.

## Author

**Paulo Rodrigues** — [GitHub](https://github.com/pauloumrodriguez)

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgements

Thanks to [Dave Gray](https://github.com/gitdagray) for the course this project is based on.
