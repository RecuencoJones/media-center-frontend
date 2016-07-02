var baseConfig = require('../config/karma.conf');

// Karma coverage configuration
module.exports = function(config) {
  baseConfig(config);

  config.set({
    preprocessors: {
      'test/**/*.ts': ['webpack', 'coverage']
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

    port: 9877
  });
};
