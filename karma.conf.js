module.exports = function(config) {
  'use strict';

  config.set({
    frameworks: ['qunit', 'sinon', 'ui5'],
    ui5: {
      type: 'library',
      url: 'http://localhost:8080',
      htmlrunner: false,
      config: {
        theme: 'sap_belize',
        language: 'en',
        logLevel: 'WARNING',
        compatVersion: 'edge',
        preload: 'async',
        resourceroots: {
          'openui5.model.json.crud': 'base/src/openui5/model/json/crud',
          'test.unit': 'base/test/openui5/model/json/crud/unit'
        }
      },
      tests: ['test/unit/allTests']
    },
    client: {
      useIframe: false,
      qunit: {
        showUI: true,
        testTimeout: 20000, //20 secs
        autostart: false,
        noglobals: true
      }
    },
    files: [
      {
        pattern: 'src/**',
        included: false,
        served: true,
        watched: true
      },
      {
        pattern: 'test/openui5/model/json/crud/unit/**',
        included: false,
        served: true,
        watched: true
      }
    ],
    preprocessors: {
      'src/**/!(thirdparty)/*.js': ['coverage']
    },
    coverageReporter: {
      type : 'lcov',
      dir : 'coverage/',
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    },
    autoWatch: true,
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],
    reportSlowerThan: 200,
    singleRun: false
  });
};
