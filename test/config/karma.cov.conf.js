var baseConfig = require('./karma.conf');

// Karma coverage configuration
module.exports = function(config) {
  baseConfig(config);

  config.set({
    preprocessors: {
      'test/**/*.spec.ts': ['webpack', 'coverage']
    },

    reporters: ['dots', 'coverage'],

    coverageReporter: {
      dir: 'test/results/coverage/karma-coverage',
      reporters: [
        {
          type: 'html',
          subdir: 'html'
        }, {
          type: 'json',
          subdir: 'json',
          file: 'coverage.json'
        }, {
          type: 'lcov',
          subdir: 'lcov'
        }
      ]
    }
  });
};
