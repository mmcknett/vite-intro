# vite-intro
This is just a basic vite app using the built-in react-ts template.

Read more in [docs/library_choices](./docs/library_choices.md).

## Running in dev mode

Using `nvm` and `npm`...

```sh
nvm use
npm ci
npm run dev
```

You'll get a browser window showing the app, with HMR.

## Testing
Run the snapshot test:

```sh
npm run test
```

To see code coverage in addition to running tests:

```sh
npm run coverage
```

## Building and Previewing
Bundle everything together into the `dist` folder:

```sh
npm run build
```

Preview the built output:

```sh
npm run preview
```
