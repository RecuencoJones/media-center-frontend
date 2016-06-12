// Karma coverage configuration

var baseConfig = require('../config/karma.conf');

module.exports = function(config) {
  baseConfig(config);

  config.set({
    preprocessors: {
      'app/**/*.ts+(x|)': ['webpack', 'coverage']
    },

    reporters: ['dots', 'coverage'],

    coverageReporter: {
      dir: 'test/results/coverage',
      reporters: [
        {
          type: 'text'
        }, {
          type: 'html',
          subdir: 'html'
        }, {
          type: 'lcov',
          subdir: 'lcov'
        }
      ]
    },

    port: 8088
  });
};
