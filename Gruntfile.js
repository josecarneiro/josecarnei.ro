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
        files: {'./public/css/style.css': './src/less/style.less'},
        options: {
          // cleancss: true
          compress: true
        }
      },
      dist: {
        files: {'./public/css/style.css': './src/less/style.less'},
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dev: {
        src: './src/js/script.js',
        dest: './public/js/script.min.js',
      },
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: 'favicon.ico',
            dest: './public',
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      less: {
        files: ['./src/less/*'],
        tasks: ['less:dev'],
        options: {
          livereload: true
        },
      },
      copy: {
        files: ['./src/*'],
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
