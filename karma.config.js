// Karma configuration
// Generated on Sun Jun 28 2015 23:48:42 GMT+0100 (Hora de Verão de GMT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],



        // list of files / patterns to load in the browser
        files: [
            './bower_components/angular/angular.min.js',
            './bower_components/angular-bootstrap/ui-bootstrap.min.js',
            './bower_components/ag-grid/dist/angular-grid.min.js',
            './bower_components/angular-nvd3/dist/angular-nvd3.min.js',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/d3/d3.min.js',
            './bower_components/nvd3/nv.d3.min.js',
            './bower_components/angular-nvd3/dist/angular-nvd3.min.js',
            './bower_components/angular-sanitize/angular-sanitize.min.js',
            './bower_components/ngtoast/dist/ngToast.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './public/dist/import.min.js',
            './webapp/tests/**/*.js'

        ],

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        plugins: [
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher'
        ],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
};
