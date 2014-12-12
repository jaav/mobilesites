/*!
 * Zeb's Gruntfile
 */

module.exports = function (grunt) {
  'use strict';

  // Initializing the configuration object
  grunt.initConfig({
    // Task configuration
    concat: {
      options: {
        separator: '',
      },
      js: {
        src: [
          'bower_components/jquery/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          '../plugins/royalslider/jquery.royalslider.min.js',
          'assets/scripts/zeb.js',
        ],
        dest: '../js/zeb.js',
      },
    },
    less: {
      development: {
        files: {
          '../css/zeb.css': 'assets/styles/zeb.less',
        },
      },
      production: {
        files: {
          '../css/zeb.css': 'assets/styles/zeb.less',
        },
      },
    },
    uglify: {
      options: {
        mangle: false // Use if you want the names of your functions and variables unchanged
      },
      js: {
        '../js/zeb.js': '../js/zeb.js',
      }
    },
    watch: {
      js: {
        files: [
          'bower_components/jquery/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'assets/scripts/*.js',
        ],
        tasks: ['concat:js', 'uglify:js'], // tasks to run
        options: {
          livereload: true, // reload the browser
        },
      },
      less: {
        files: [
          'assets/styles/*.less',
          'assets/styles/overrides/*.less',
        ],
        tasks: ['less:development'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task definition
  grunt.registerTask('default', ['watch']);
};
