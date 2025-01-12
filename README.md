# Socialink Backend Repository

## Setup

1. Clone the latest version of the repository `git clone https://github.com/glitchkyle/socialink-backend.git`
2. Navigate to the repository `cd socialink-backend`
3. Create an environment variable file `.env` in the root directory using `touch .env`.
4. Copy the latest environment variables on to the `.env`
5. Start the development container `docker-compose up --build -d`
6. Setup the database `npm run migration:run`
8. Code away!

## TypeORM Migrations

### Create migration

```bash
npm run migration:create src/database/migrations/[name-of-migration]
```

### Run migrations (Development)

```bash
npm run migration:run
```

### Revert migrations (Development)

```bash
npm run migration:revert
```