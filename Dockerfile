FROM node:24-alpine

LABEL org.opencontainers.image.source="https://github.com/kenchilla1/fitapp" \
	org.opencontainers.image.title="Lift with Kenny" \
	org.opencontainers.image.description="Self-hosted workout tracker"

WORKDIR /app
COPY index.html app.js styles.css split-theme.css account.css origin-theme.css server.js import-fitnotes.js manifest.webmanifest icon.jpg lift-with-kenny-192.png lift-with-kenny-512.png ./

ENV NODE_ENV=production
ENV PORT=4173
ENV HOST=0.0.0.0
ENV REPWISE_DATA_DIR=/data

EXPOSE 4173
CMD ["node", "server.js"]