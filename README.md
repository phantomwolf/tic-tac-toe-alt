# Tic Tac Toe Alt

The project uses an alternative way to implement the [official tic-tac-toe tutorial](https://react.dev/learn/tutorial-tic-tac-toe).

## Differences from the official tic-tac-toe

* Instead of using the entire `squares` as a state, this project uses player `moves` as a state, and `squares` is deducted from it.
* TypeScript

The board status `squares` can be deducted from `moves`. This makes rolling back pretty easy: just slice `moves`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The index page is located at [src/pages/index.tsx](src/pages/index.tsx).