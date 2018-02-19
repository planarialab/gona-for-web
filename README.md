# Gona for web

This project is web version of [GONA App](https://rhiokim.github.io/gona/)

## Features

## How to use

### Development

install it and run:

```bash
npm install
npm run dev:express
npm run build
npm run start
npm run start:express
npm run static
```

and then, if you want to use static typing with flow run follow after install `flow-typed`

```bash
flow-typed install
```

with docker

```bash
npm run build          #0
npm run docker:build   #1
npm run docker:run     #2
npm run docker:rm      #3
npm run docker // run all step without 0 step
```

## LICENSE

MIT
