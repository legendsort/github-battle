

Add this to `package.json`:

```
  "babel": {
    "presets": ["env", "react"]
  },
```

(so that `babel-loader` knows what transpile transformations are needed)

# What the npm packages are for

### Dependencies (to run app)

### Dev dependencies (to build app)

- **babel-core**: the core of babel transpiler.
- **babel-loader**: requires for webpack config
- **babel-preset-env**: transpile JS to latest JS version
- **babel-preset-react**: transpile JSX to JS
- **css-loader**: change `url()` to `require("")`
- **html-webpack-plugin**: insert `<script src = "index_bundle.js"/>` in `dist/index.html` 
(not needed for `app/index.html`). Used in `webpack.config.js`.
- **style-loader**: take CSS and insert into a page. This makes `require("./index.css")` work.
- **webpack**: core bundler. So we can do `webpack` and create `dist/index_bundle.js`.
- **webpack-dev-server**: instead of building webpack bundle every time, this auto-build diff every time code changes.
Super cool. Check out `npm run start` (`webpack-dev-server --open`). This does not refresh `dist/`.
All in cache hence quick.