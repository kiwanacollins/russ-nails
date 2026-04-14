FROM node:22-bookworm-slim

WORKDIR /app

ENV NPM_CONFIG_FETCH_RETRIES=5 \
	NPM_CONFIG_FETCH_RETRY_FACTOR=2 \
	NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=20000 \
	NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=120000 \
	NPM_CONFIG_FETCH_TIMEOUT=600000

COPY package.json package-lock.json ./
RUN npm ci --no-audit || npm ci --no-audit || npm ci --no-audit

COPY . .

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4000
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Next standalone server expects static assets under .next/standalone/.next/static.
RUN rm -rf .next/standalone/.next/static \
	&& mkdir -p .next/standalone/.next \
	&& cp -R .next/static .next/standalone/.next/static

EXPOSE 4000

CMD ["npm", "run", "start"]