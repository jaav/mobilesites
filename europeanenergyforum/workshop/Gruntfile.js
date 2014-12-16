
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
          'assets/scripts/custom.js',
        ],
        dest: '../frame/js/custom.js',
      },
    },
    less: {
      development: {
        files: {
          '../frame/css/style.css': 'assets/styles/style.less',
        },
      }
    },
    uglify: {
      options: {
        mangle: false // Use if you want the names of your functions and variables unchanged
      },
      js: {
        files: {
          '../frame/js/custom.min.js': ['../frame/js/custom.js']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          '../frame/css/style.min.css': ['../frame/css/style.css']
        }
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
        tasks: ['less:development','cssmin:combine'],
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Task definition
  grunt.registerTask('default', ['watch']);
};
