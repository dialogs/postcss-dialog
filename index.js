const postcss = require('postcss');

const defaultOptions = {
  debug: false,
  bundler: null,
  browsers: 'Chrome >= 45, ff >= 40, ie >= 10, Safari >= 8'
};

const plugin = postcss.plugin('postcss-dialog', (_options) => {
  const options = Object.assign(defaultOptions, _options);

  const plugins = [
    require('postcss-import')({
      addDependencyTo: options.bundler
    }),
    require('postcss-cssnext')({
      browsers: options.browsers
    }),
    require('postcss-reporter')()
  ];

  if (options.debug) {
    plugins.push(
      require('postcss-browser-reporter')({
        selector: 'body:after'
      })
    );
  }

  return postcss(plugins);
});

module.exports = plugin;
