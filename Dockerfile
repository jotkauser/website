FROM node:20-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
RUN pnpm install --frozen-lockfile
RUN npx prisma generate
RUN npm run build
EXPOSE 4173
CMD npx prisma migrate deploy && pnpm preview --host