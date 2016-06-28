var config = require('./config');

module.exports = function(grunt) {

  grunt.initConfig({
    concurrent: {
      dev: ['less:dev', 'jade:dev', 'watch', 'connect:server'],
      options: {
        logConcurrentOutput: true
      }
    },
    connect: {
      server: {
        options: {
          base: './dist/',
          open: true,
          livereload: true,
          keepalive: true
        }
      }
    },
    less: {
      dev: {
        files: {'./src/css/style.css': './src/less/style.less'}
      },
      dist: {
        options: {
          compress: true
        },
        files: {'./src/css/style.css': './src/less/style.less'}
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: {'./dist/index.html': './src/jade/*'}
      },
      dist: {
        options: {
          pretty: false
        },
        files: {'./dist/index.html': './src/jade/*'}
      },
    },
    watch: {
      less: {
        files: ['./src/less/*'],
        tasks: ['less:dev', 'jade:dev'],
        options: {
          livereload: true
        },
      },
      jade: {
        files: ['./src/jade/*'],
        tasks: ['jade:dev'],
        options: {
          livereload: true
        },
      },
      configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true
        }
      }
    },
    // DEPLOY TO FTP SERVER
    'ftp-deploy': {
      build: {
        auth: {
          host: config.ftp.host,
          port: config.ftp.port
        },
        src: './dist/',
        dest: './public/www/',
        exclusions: ['./dist/css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.registerTask('default', 'concurrent');
  grunt.registerTask('dist', ['less:dist', 'jade:dist']);
  grunt.registerTask('deploy', ['less:dist', 'jade:dist', 'ftp-deploy']);
};
