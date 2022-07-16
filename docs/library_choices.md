# Choices of libraries for this prototype project
## Motivation
I was interested in trying [Vite 3](https://vitejs.dev/blog/announcing-vite3.html), after seeing it in featured in this week's [JavaScript Weekly (#598)](https://javascriptweekly.com/issues/598). Specifically, I'm interested in seeing how ES Modules, rather than transpilation + webpack, can make the dev experience better.

## Frontend app
I'm starting with a simple frontend-only app, which of course means there is a backend server and that it mostly serves the client. It might also do SSR; that'd be cool.

Chosen libraries:
- Vite 3 [for Bundling, as opposed to webpack, the whole point of this project.]
- React 18 (I'm used to React; want to try the latest) [for Interactivity, as opposed to Vue, etc.]
- Node 18 (Latest stable) [for the Server, as opposed to Bun or Deno]
- TypeScript (I really should do something in it) [for Language, as opposed to JavaScript]
- [vitest](https://vitest.dev/) [for Testing, as opposted to Jest, which does babel transpilation under the covers]

Rejected libraries:
- [Fastify DX](https://github.com/fastify/fastify-dx/tree/main/packages/fastify-dx-react) [for SSR]
  - I thought about trying it, but it looks overly cumbersome to start with it without having a specific SSR story in mind.
  - It'd probably be worth it more to try out one of the frameworks that relies on [React Server Component](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html) if I'm going to invest in an alpha tech.

Choices remaining:
- [Ladel](https://ladle.dev/blog/introducing-ladle/) [for isolated component testing as opposed to Storybook]
- React 18 strict mode