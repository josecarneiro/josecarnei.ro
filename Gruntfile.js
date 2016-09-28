module.exports = function(grunt) {

  grunt.initConfig({
    concurrent: {
      dev: ['less:dev', 'uglify:dev', 'copy:dev', 'nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: './bin/www'
       }
    },
    less: {
      dev: {
        files: {
          './base/public/css/style.css': './base/src/less/style.less',
          './base/public/css/essential.css': './base/src/less/essential.less'
        },
        options: {
          cleancss: true
        }
      },
      dist: {
        files: {
          './base/public/css/style.css': './base/src/less/style.less',
          './base/public/css/essential.css': './base/src/less/essential.less'
        },
        options: {
          compress: true
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
      less: {
        files: ['./base/src/less/*'],
        tasks: ['less:dev'],
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
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'concurrent');
  grunt.registerTask('dist', ['less:dist', 'uglify:dev', 'copy:dev']);
};
