# Instructions

## Run on laptop

In any case, study `package.json` for more info on scripts and dependencies.


Note: Packages in `dependencies` are for running the app.
Packages in `dev-dependencies` are for building the app.

### Setup

git clone this repository and navigate to repository root directory.

Install dependencies locally (create `node_modules` directory with npm packages)

```
npm install
```

### Run in dev mode

Start a webpack dev server at [http://localhost:8080/](http://localhost:8080/):

```
npm run start
```

Whenever files changes, front-end gets updated automatically (and quickly).

Note that this does not update anything in `dist/`.

### Build bundled files

This step will bundle files in a compact manner and output to `dist/`:

- `index.html`: open this in a browser to view output
- `index_bundle.js`: the bundled javascript file. View in editor.

This build `index_bundle.js` "prettily" (occupy more space but good for learning / debugging)

```
npm run build-dev
```

This build `index_bundle.js` in a minified manner (occupy less space and good for production deployment)

```
npm run build-prod
```

