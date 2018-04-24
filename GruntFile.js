module.exports = function(grunt) {
    var file_paths = [];
    var javascriptRegex = /script type="text\/javascript" src="(lib.*)"/g;
    var cssRegex = /link rel="stylesheet" type="text\/css" href="(lib.*)"/g;
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: ['.css']
                }]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/styles.min.css': ['css/styles.css']
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register Tasks
    grunt.registerTask('sassify', ['sass', 'cssmin']);
}
