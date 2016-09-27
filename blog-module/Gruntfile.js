module.exports = function(grunt) {

  grunt.initConfig({
    concurrent: {
      // dev: ['less:dev', 'uglify:dev', 'copy:dev', 'nodemon', 'watch'],
      dev: ['less:dev', 'uglify:dev', 'copy:dev', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    // nodemon: {
    //   dev: {
    //     script: './bin/www'
    //    }
    // },
    less: {
      dev: {
        files: {'./base/public/css/style.css': './base/src/less/style.less', './admin/public/css/style.css': './admin/src/less/style.less'},
        options: {
          cleancss: true
        }
      },
      dist: {
        files: {'./base/public/css/style.css': './base/src/less/style.less', './admin/public/css/style.css': './admin/src/less/style.less'},
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
            src: 'favicon.ico',
            dest: ['./base/public', './admin/public'],
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      less: {
        files: ['./base/src/less/*', './admin/src/less/*'],
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
  // grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'concurrent');
  grunt.registerTask('dist', ['less:dist', 'uglify:dev', 'copy:dev']);
};
