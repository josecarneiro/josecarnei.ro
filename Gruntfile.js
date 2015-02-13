module.exports = function(grunt) {

  grunt.initConfig({

    less: {
      dev: {
        options: {
          paths: ["css"],
          cleancss: true
        },
        files: {"css/style.css": "less/style.less"}
      },
      dist: {
        options: {
          paths: ["css"],
          cleancss: true
        },
        files: {"css/style.css": "less/style.less"}
      }
    },

    jade: {

      dev: {
          options: {
            pretty: true,
            data: {
              debug: false
            }
          },
          files: {"index.html": "jade/*.jade"}
      },
      dist: {
        compile: {
          options: {
            pretty: true,
            data: {
              debug: false
            }
          },
          files: {"index.html": "jade/*.jade"}
        }
      },

    },

    watch: {
      jade: {
        files: ["./jade/*"],
        tasks: ["jade:dev"],
        options: {
          livereload: true
        },
      },
      less: {
        files: ["less/*"],
        tasks: ["less:dev"],
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

    connect: {
      server: {
        options: {
          open: true,
          hostname: "localhost",
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['connect:server', 'watch']);
  grunt.registerTask('dist', ['less:dist', 'jade:dist']);

};