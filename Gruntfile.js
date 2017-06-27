'use strict';

module.exports = grunt => {

  grunt.initConfig({
    concurrent: {
      dev: [ 'sass:dev', 'uglify:dev', 'copy:dev', 'nodemon', 'watch' ],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: './bin/server.js',
        options: {
          ignore: []
        }
       }
    },
    sass: {
      dev: {
        files: {
          './base/public/css/style.css': './base/src/style/style.scss',
          './base/public/css/essential.css': './base/src/style/essential.scss'
        },
        options: {
          style: 'expanded'
        }
      },
      dist: {
        files: {
          './base/public/css/style.css': './base/src/style/style.scss',
          './base/public/css/essential.css': './base/src/style/essential.scss'
        },
        options: {
          style: 'compressed'
        }
      }
    },
    uglify: {
      dev: {
        src: './base/src/js/script.js',
        dest: './base/public/js/script.min.js',
      },
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: './base/src',
            src: '*',
            dest: './base/public',
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      sass: {
        files: ['./base/src/style/*'],
        tasks: ['sass:dev'],
        options: {
          livereload: true
        },
      },
      copy: {
        files: ['./base/src/*'],
        tasks: ['copy:dev'],
        options: {
          livereload: true
        },
      },
      configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'concurrent');
  grunt.registerTask('dist', ['sass:dist', 'uglify:dev', 'copy:dev']);
};
