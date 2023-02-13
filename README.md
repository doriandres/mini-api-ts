# Minicom API

This an simple API example using `NodeJS` along with `TypeScript`.

It uses `NestJS` for API definition and `TypeORM` to handle DB interactions.

> When running locally to avoid any setup the app uses `SQLite` but in the fly.io cloud it uses a `Postgres` instance.

## Working locally

### Installing dependencies
Run this command to install all deps needed
```
yarn install
```

### Running locally
Run this command to start local server for API
```
yarn dev
```
---

## Deploying
Run from project root
> Make sure to have [Fly CLI](https://fly.io/docs/hands-on/install-flyctl/) installed
```
flyctl deploy
```

---

## Accessing Deployed API
Go to https://mini-api.fly.dev/api/docs