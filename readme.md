# StencilBook - A Stencil Storybook Starter

This is a starter project for building a standalone Web Component using Stencil and Storybook.

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

Clone the repo

```bash
git clone https://github.com/Edd-Strickland/vanilla-sb-stencil.git
```

Then change to the vanilla Storybook/Stencil implementation:

```bash
git checkout -b vanilla
```

Change into the base directory:

```bash
cd vanilla-sb-stencil
```

Install the modules:

```bash
npm install
```

and run a build for the entire repo:

```bash
npm run build:all
```

After this run storybook:

```bash
npm run storybook
```

## Other commands for this repo include:

Build stencil:

```bash
npm run stencil
```

Start stencil directly in serve/watch mode; Useful for ameneding stencil components directly:

```bash
npm run stencil:start
```

Run storybook and a stencil build with watch and serve, deleting any previous versions built and will serve locally:

```bash
npm run storybook:build:all
```

Serve storybook Locally:

```bash
npm run storybook:serve
```

Reset modules; Deletes and reinstalls node modules:

```bash
npm run reset:modules
```

To run the unit tests for the components, run:

```bash
npm test
```

## Test

To run tests in watch mode:

```bash
npm run test.watch
```

## Generate new components

To generate new Stencil components automagically:

```bash
npm run generate
```