var baseConfig = require('../config/karma.conf');

// Karma configuration
module.exports = function(config) {
  baseConfig(config);

  config.set({
    reporters: ['spec'],

    junitReporter: {
      outputFile: 'test/results/unit/test-results.xml'
    }
  });
};
