// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

var baseConfig = require('../config/karma.conf');

module.exports = function(config) {
  baseConfig(config);

  config.set({
    reporters: ['dots', 'junit'],

    junitReporter: {
      outputFile: 'test/results/unit/test-results.xml'
    }
  });
};
