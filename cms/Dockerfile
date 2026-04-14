FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]