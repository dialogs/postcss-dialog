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

Options
-------

Name | Default | Description
---- | ------- | -----------
`debug` | `false` | Enable reporting to web page
`report` | `true` | Enable reporting to console
`bundler` | `null` | Pass webpack instance for correct import resolving
`initial` | `true` | Enable `initial: all` polyfill
`autoprefixer` | `true` | Enable Autoprefixer
`browsers` | `Chrome >= 45, ff >= 40, ie >= 10, Safari >= 8` | Supported browsers

License
-------
[Apache-2.0](LICENSE)
