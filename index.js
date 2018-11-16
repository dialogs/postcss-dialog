const postcss = require("postcss");
const defaultsDeep = require("lodash.defaultsdeep");

const defaultOptions = {
  rtl: false,
  debug: false,
  report: true,
  stage: 2,
  import: {
    skipDuplicates: true
  },
  initial: {
    reset: "all"
  },
  properties: true,
  autoprefixer: true,
  browsers: "Chrome >= 45, ff >= 40, ie >= 10, Safari >= 8"
};

const plugin = postcss.plugin("postcss-dialog", _options => {
  const options = defaultsDeep({}, _options, defaultOptions);

  const plugins = [];

  if (options.import) {
    plugins.push(require("postcss-import")(options.import));
  }

  plugins.push(
    require("postcss-preset-env")({
      stage: options.stage,
      browsers: options.browsers,
      autoprefixer: options.autoprefixer,
      features: {
        "all-property": options.initial,
        "custom-properties": options.properties
      }
    })
  );

  if (options.rtl) {
    plugins.push(require("rtlcss")());
  }

  if (options.report) {
    plugins.push(require("postcss-reporter")());

    if (options.debug) {
      plugins.push(
        require("postcss-browser-reporter")({
          selector: "body:after"
        })
      );
    }
  }

  return postcss(plugins);
});

module.exports = plugin;
