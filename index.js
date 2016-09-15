const postcss = require('postcss');

const defaultOptions = {
  debug: false,
  report: true,
  bundler: null,
  initial: true,
  autoprefixer: true,
  browsers: 'Chrome >= 45, ff >= 40, ie >= 10, Safari >= 8'
};

const plugin = postcss.plugin('postcss-dialog', (_options) => {
  const options = Object.assign(defaultOptions, _options);

  const plugins = [];

  if (options.bundler) {
    plugins.push(
      require('postcss-import')({
        addDependencyTo: options.bundler
      })
    );
  }

  plugins.push(
    require('postcss-cssnext')({
      browsers: options.browsers,
      features: {
        initial: options.initial,
        autoprefixer: options.autoprefixer
      }
    })
  );

  if (options.report) {
    plugins.push(
      require('postcss-reporter')()
    );

    if (options.debug) {
      plugins.push(
        require('postcss-browser-reporter')({
          selector: 'body:after'
        })
      );
    }
  }

  return postcss(plugins);
});

module.exports = plugin;
