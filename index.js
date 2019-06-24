/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const postcss = require('postcss');
const defaultsDeep = require('lodash.defaultsdeep');

const defaultOptions = {
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
};

const plugin = postcss.plugin('postcss-dialog', (_options) => {
  const options = defaultsDeep({}, _options, defaultOptions);
  const plugins = [];

  if (options.import) {
    plugins.push(require('postcss-import')(options.import));
  }

  if (options.mixins) {
    plugins.push(require('postcss-mixins')(options.mixins));
  }

  if (options.env) {
    plugins.push(require('postcss-preset-env')(options.env));
  }

  if (options.modules) {
    plugins.push(require('postcss-modules')(options.modules));
  }

  if (options.dedupe) {
    plugins.push(require('postcss-discard-duplicates')(options.dedupe));
  }

  if (options.cssnano) {
    plugins.push(require('cssnano')(options.cssnano));
  }

  if (options.rtl) {
    plugins.push(require('rtlcss')(options.rtl));
  }

  if (options.report) {
    plugins.push(require('postcss-reporter')(options.report));
  }

  if (options.debug) {
    plugins.push(require('postcss-browser-reporter')(options.debug));
  }

  return postcss(plugins);
});

module.exports = plugin;
