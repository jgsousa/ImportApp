module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        eslint: {
            options: {
                configFile: './.eslintrc'
            },
            target: [
                'webapp/**/*.js'
            ]
        },
        uglify: {
            compress: {
                options:{
                    mangle:true,
                    compress:true
                },
                files: [{
                    'public/dist/import.min.js': [
                        'webapp/modules/importApp.js',
                        'webapp/controllers/*.js',
                        'webapp/services/*.js',
                        'webapp/modals/*.js'
                    ]
                }]
            }
        },
        less: {
            convert: {
                options: {
                    paths: ["webapp/stylesheets"]
                },
                files: {
                    "webapp/stylesheets/style.css": "webapp/stylesheets/style.less"
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                expand: true,
                cwd: 'webapp/',
                src: ['**/*.js', '**/*.html'],
                dest: 'public/'
            }
        },
        karma: {
            options: {
                configFile: 'karma.config.js'
            },
            unit: {
                // run tests once instead of continuously
                singleRun: true
            }
        }
    });

    grunt.registerTask('default', ['eslint', 'uglify', 'less', 'karma']);
    grunt.registerTask('deploy', ['eslint', 'uglify', 'less', 'compress']);
};