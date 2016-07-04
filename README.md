PostCSS Dialog
==============

Installation
------------

```
npm install --save-dev postcss
npm install --save-dev @dlghq/postcss-dialog
```

Usage
-----

```js
postcss([
  require('@dlghq/postcss-dialog')({
    // options
  })
]);
```

Options
-------

 - `debug` enables additional logging
 - `bundler` pass webpack instance for correct import resolving
 - `browsers` [browserlist string](https://github.com/ai/browserslist#queries) for autoprefixer, etc.

License
-------
[Apache-2.0](LICENSE)
