# React Typescript Starter

<!--toc:start-->
- [React Typescript Starter](#react-typescript-starter)
  - [React 19 starter](#react-19-starter)
  - [Install](#install)
  - [Usage](#usage)
  - [Configure](#configure)
<!--toc:end-->

## React 19 starter

- Typescript 7
- Yarn 4
- Vite 8
- Vitest 5
- Biome 2
- Stylelint 17
- Testing Library React 16
- CSSNano 9
- PostCSS preset-env 11
- Playwright 1

This is what I currently like to use as a starter mix to make a web application. Sets up a page with React and Vite, backed with react-refresh. Tests with Vitest and @testing-library.

## Install

```
$ yarn install
➤ YN0000: · Yarn 4.18.0
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
➤ YN0000: · Done in 0s 362ms
```

## Usage

```
$ yarn dev

  VITE v8.2.2  ready in 262 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

```
$ yarn build
vite v8.2.2 building client environment for production...
✓ 16 modules transformed.
dist/index.html                   0.40 kB │ gzip:  0.27 kB
dist/assets/index-Cq5YsKkN.css    0.02 kB │ gzip:  0.04 kB
dist/assets/index-CnrYpLd1.js   190.34 kB │ gzip: 59.93 kB
✓ built in 543ms
```

```
$ yarn test

 RUN  v5.0.0 /home/rockerboo/code/react-typescript-starter

 ✓ src/app.test.tsx (1)
   ✓ app

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  01:38:43
   Duration  650ms (environment 74%, setup 15%, transform 6%, tests 3%, import 1%)
```


## Configure

Some values in the starter may need to be changed to work well as your project.

- package.json (author, name)
- src/app.tsx
- index.html
