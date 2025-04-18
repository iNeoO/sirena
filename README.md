## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Build backend to create client rpc

```bash
pnpm --filter @sirena/backend build
```

### 3. Start development servers

```bash
pnpm --filter @sirena/backend dev
pnpm --filter @sirena/frontend dev
```

### 1. Migrations

```bash
docker compose up
# alter packages/database/prisma/schema.prisma
docker exec -ti sirena-database-dev sh
pnpm --filter @sirena/database db:migrate --name <the migration name>
```
