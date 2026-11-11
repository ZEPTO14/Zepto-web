FROM node:22-alpine
WORKDIR /app
COPY server.cjs ./
COPY web/ ./web/
USER node
CMD ["node","server.cjs"]
