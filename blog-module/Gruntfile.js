module.exports = function(grunt) {

  grunt.initConfig({
    config: {
      theme: {
        name: 'base',
        path: './theme/<%= config.theme.name %>'
      },
      dirs: {
        admin: './core/admin'
      },
    },
    // pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      dev: ['sass:dev', 'uglify:dev', 'copy:dev', 'nodemon', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },
    nodemon: {
      dev: {
        script: './server.js'
       }
    },
    sass: {
      dev: {
        files: {
          '<%= config.theme.path %>/public/css/style.css': '<%= config.theme.path %>/src/sass/style.scss',
          './core/admin/public/css/style.css': './core/admin/src/sass/style.scss'
        }
      },
      dist: {
        files: {
          '<%= config.theme.path %>/public/css/style.css': '<%= config.theme.path %>/src/sass/style.scss',
          './core/admin/public/css/style.css': './core/admin/src/sass/style.scss'
        }
      }
    },
    uglify: {
      dev: {
        src: '<%= config.theme.path %>/src/js/script.js',
        dest: '<%= config.theme.path %>/public/js/script.min.js',
      },
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: '<%= config.theme.path %>/src',
            src: 'favicon.ico',
            dest: ['<%= config.theme.path %>/public', './core/admin/public'],
            filter: 'isFile'
          },
        ]
      }
    },
    watch: {
      sass: {
        files: ['<%= config.theme.path %>/src/sass/*', './core/admin/src/sass/*'],
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      },
      copy: {
        files: ['<%= config.theme.path %>/src/*'],
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

  // LOAD TASKS
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'concurrent');
  grunt.registerTask('dist', ['sass:dist', 'uglify:dev', 'copy:dev']);
};
