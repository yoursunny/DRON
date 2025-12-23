FROM node:24-alpine3.22
WORKDIR /app
COPY package.json pnpm-workspace.yaml /app
RUN env NODE_ENV=production corepack pnpm install --prod --no-optional \
 && rm -rf ~/.cache/pnpm ~/.local/share/pnpm/store
COPY server/ /app/server/
CMD ["corepack", "pnpm", "-s", "serve"]
