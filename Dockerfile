FROM node:24-alpine

WORKDIR /app
COPY index.html app.js styles.css split-theme.css account.css origin-theme.css server.js ./

ENV NODE_ENV=production
ENV PORT=4173
ENV HOST=0.0.0.0
ENV REPWISE_DATA_DIR=/data

EXPOSE 4173
CMD ["node", "server.js"]