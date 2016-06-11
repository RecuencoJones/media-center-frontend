// Karma shared configuration
module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../../',

    /* Enable / disable watching file and executing tests
     * whenever any file changes
     */
    autoWatch: true,

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'chai-sinon'
    ],

    // Shared plugins (default is 'karma-*'):
    plugins: [
      'karma-*'
    ],

    preprocessors: {
      '**/*.ts+(x|)': ['webpack']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'test/config/mocha-globals.ts',
      'app/**/*.ts',
      'test/specs/unit/**/*.ts'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // level of logging: LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
    logLevel: config.LOG_INFO,

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
