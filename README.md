This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First you need pnpm:

```bash

npm install pnpm
```

Then install all dependencies from the root folder (i.e badeklubben)
(_DO NOT USE NPM_)

```bash
pnpm i
```

Then run the dev from the root folder (no need to go into apps/www||sanity to run):

```bash
pnpm run dev
```

_BEFORE PUSHING CODE TO GIT_

do: `pnpm format`

You can use this to check for type errors in the code:

```bash
pnpm check
```

When it works you can also use:

```bash
pnpm lint

```

Format to make the project with the same prettier thingy
pnpm check to check the build lol
lint to lint (you know the drill)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
