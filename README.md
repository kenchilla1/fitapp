# Lift with Kenny

Lift with Kenny is a self-hosted workout tracker with individual member accounts, searchable training history, workout reuse, profile photos, a shared workout feed, recent personal-best posts, and member likes.

## Unraid

The GitHub Actions workflow publishes the container to [GitHub Container Registry](https://github.com/kenchilla1/fitapp/pkgs/container/lift-with-kenny) on pushes to `main` and version tags. In the package settings, set visibility to **Public** before using it on Unraid without registry credentials.

Run the included `docker-compose.yml` with the Unraid Compose Manager. It pulls `ghcr.io/kenchilla1/lift-with-kenny:latest`, publishes the app on port `4173`, and stores SQLite data in `/mnt/user/appdata/origin`, outside the container. That existing appdata path is intentionally unchanged so an existing database is not silently moved. The container runs as UID `99` and GID `100`, matching Unraid's `nobody:users`; make sure the appdata directory is writable by that user.

To publish a new image, push a commit to `main`; version tags also publish a matching image tag.

For a trusted LAN-only setup, open `http://<unraid-address>:4173`. Before making the site internet-accessible, put it behind an HTTPS reverse proxy and set `COOKIE_SECURE=true` in the Compose environment. Do not expose the HTTP port directly to the public internet.

The SQLite file contains account names, workout data, profile photos, and salted password/recovery-answer hashes. The first registered account is the administrator and can manage member photos. Back up `/mnt/user/appdata/origin` as part of the Unraid appdata backup.

## Local development

Node.js 24 or newer is required. No npm packages are used.

```sh
node server.js
```

Open `http://localhost:4173`. By default, the database is created under `./data`; override `REPWISE_DATA_DIR` to store it elsewhere. `PORT` and `HOST` can also be overridden.

## Accounts and sharing

Each account has an independent workout log, personal records, custom exercises, and training split. The next-session panel can reuse up to three recent workouts per body part, and the calendar searches or filters all saved sessions. Workout markers distinguish splits by shape (PPL circles, upper/lower squares, bro split triangles, and hollow 3-5-7 circles) and workout days by color. New workout posts and newly achieved weight/repetition PRs appear on the Overview. Members can like and unlike other members' workouts and PRs; self-likes are not allowed. Full set details, notes, and unrelated personal records stay private. Passwords and recovery answers are stored as salted scrypt hashes, never as readable text.

The JSON API is served from the same origin under `/api`, so native clients can use the same account and workout endpoints later.