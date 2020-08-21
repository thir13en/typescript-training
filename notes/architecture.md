# Architecture

### How to use default ES6 import / export syntax without a module bundler
* add the es6 default `import/export` syntax to make your app more modular.
* In `tsconfig.json`, make sure this two flags are looking like this:
```json
{
    "target": "ES6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
    "module": "ES2015"
}
```
* In your HTML file, make sure you import the app with the `defer` and `type="module"`
attributes
