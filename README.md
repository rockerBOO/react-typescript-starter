# React Typescript Starter

<!--toc:start-->
- [React Typescript Starter](#react-typescript-starter)
  - [React 18 starter](#react-18-starter)
  - [Install](#install)
  - [Usage](#usage)
  - [Configure](#configure)
<!--toc:end-->

## React 18 starter

- Typescript 5
- Yarn 4
- Vite 7
- Vitest 3
- Biome 2
- Stylelint 16
- Testing Library React 16
- CSSNano 7
- PostCSS preset-env 10
- Playwright 1

This is what I currently like to use as a starter mix to make a web application. Sets up a page with React and Vite, backed with react-refresh. Tests with Jest and @testing-library.

## Install

```
$ yarn install
➤ YN0000: · Yarn 4.5.1
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 221ms
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed
➤ YN0000: · Done in 0s 511ms
```

## Usage

```
$ yarn dev

  VITE v5.4.11  ready in 118 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

```
$ yarn build
vite v5.4.11 building for production...
✓ 31 modules transformed.
dist/index.html                   0.41 kB │ gzip:  0.28 kB
dist/assets/index-Cq5YsKkN.css    0.02 kB │ gzip:  0.04 kB
dist/assets/index-Y3J0mTAw.js   142.47 kB │ gzip: 45.74 kB
✓ built in 824ms
```

```
$ yarn test

 DEV  v2.1.5 /home/rockerboo/code/react-typescript-starter

 ✓ src/app.test.tsx (1)
   ✓ app

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  11:22:27
   Duration  562ms (transform 23ms, setup 0ms, collect 87ms, tests 14ms, environment 244ms, prepare 97ms)
```


## Configure

Some values in the starter may need to be changed to work well as your project.

- package.json (author, name)
- src/app.tsx
- index.html
