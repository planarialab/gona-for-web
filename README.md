# .seed-next-app

This's seed project built on top of next.js

## Features

## Technical Features

**production**

* next@latest
* react@latest
* redux, redux-thunk
* next-redux-wrapper
* express
* jest?

**development**

* babel, eslint, flowtype
* prettier
* commitizen, husky, validate-commit-message

## How to use

### Download manually

Download the example [or clone the repo](https://github.com/rhiokim/.seed-next-app):

```bash
mkdir my-new-next-app
curl https://codeload.github.com/rhiokim/.seed-next-app/tar.gz/master | tar -xz --strip=1
 -C my-new-next-app
```

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
