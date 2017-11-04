# Notes

create project root directory (say) `github-battle-2017`. Navigate to this project root.

Do a `npm init` - keep pressing enter until no more questions. This creates `package.json`.

create `.gitignore` to ignore:
 
 - `node_modules` (npm libraries as a result of doing `npm install`)
 - `dist` (webpack output bundlefiles)

Install dependencies that runs the app:

```
npm install --save react react-dom prop-types
```

(Note: as of React 15.5, `React.PropTypes` has been de-coupled out to `prop-types` npm package)

Install dependencies that build the app (dev dependencies):

```
npm install --save-dev \
babel-core babel-loader babel-preset-env babel-preset-react \
css-loader style-loader html-webpack-plugin webpack webpack-dev-server
```

Create `app` directory, with these files:

```
- app
  - index.css  (standard cascade stye sheet)
  - index.html  (contains a HTML component with id='app')
  - index.js  (react helloworld component, and render to a HTML component where id='app')
```

Create `webpack.config.js` (which requires entry point `app/index.js`)

Add babel presets to `package.json` (see `package-json-notes.md`).

Update npm scripts.

# Step 4

```
npm install --save axios
```

