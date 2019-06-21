# PostCSS Dialog Preset

## Installation

```
npm install --save-dev postcss
npm install --save-dev @dlghq/postcss-dialog
```

## Usage

```js
postcss([
  require('@dlghq/postcss-dialog')({
    // options
  })
]);
```

## Options

Name      | Plugin
--------- | ------------
`import`  | [postcss-import](https://github.com/postcss/postcss-import)
`mixins`  | [postcss-mixins](https://github.com/postcss/postcss-mixins)
`env`     | [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
`modules` | [postcss-modules](https://github.com/css-modules/postcss-modules)
`dedupe`  | [postcss-discard-duplicates](https://github.com/ben-eb/postcss-discard-duplicates)
`cssnano` | [cssnano](https://github.com/cssnano/cssnano)
`rtl`     | [rtlcss](https://github.com/MohammadYounes/rtlcss)
`debug`   | [postcss-browser-reporter](https://github.com/postcss/postcss-browser-reporter)
`report`  | [postcss-reporter](https://github.com/postcss/postcss-reporter)

Set value to `false` or `null` to disable plugin.

### Default values

```
{
  import: {
    skipDuplicates: true,
  },
  mixins: true,
  env: {
    stage: 3,
    features: {
      'custom-media-queries': true,
      'nesting-rules': true,
      'custom-properties': true,
      'color-mod-function': { unresolved: 'warn' },
    },
  },
  modules: false,
  dedupe: true,
  cssnano: {
    preset: 'default',
  },
  rtl: false,
  report: true,
  debug: false,
}
```

## License

[Apache-2.0](LICENSE)
