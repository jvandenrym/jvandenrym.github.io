'use strict';

module.exports = function(grunt) {
  // Load all NPM grunt tasks
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration
  grunt.initConfig({
    shell: {
      jekyllBuild: {
        command: 'rm -rf _site/*;jekyll build',
        options: {
          stdout: true
        }
      }
    },

    // CSSlint to debug css
    csslint : {
      strict: {
        src: [ 'debug/main.css' ]
      },
      lax: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: [ 'debug/main.css' ]
      }
    },

    // Modernizr
    modernizr: {

      dist: {
          // [REQUIRED] Path to the build you're using for development.
          "devFile" : "lib/modernizr-latest.js",

          // [REQUIRED] Path to save out the built file.
          "outputFile" : "assets/js/lib/modernizr-custom.js",

          // Based on default settings on http://modernizr.com/download/
          "extra" : {
              "shiv" : true,
              "printshiv" : true,
              "load" : true,
              "mq" : false,
              "cssclasses" : true
          },

          // Based on default settings on http://modernizr.com/download/
          "extensibility" : {
              "addtest" : true,
              "prefixed" : true,
              "teststyles" : true,
              "testprops" : true,
              "testallprops" : true,
              "hasevents" : false,
              "prefixes" : true,
              "domprefixes" : false
          },

          // By default, source is uglified before saving
          "uglify" : true,

          // Define any tests you want to implicitly include.
          "tests" : [],

          // By default, this task will crawl your project for references to Modernizr tests.
          // Set to false to disable.
          "parseFiles" : true,

          // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
          // You can override this by defining a "files" array below.
           "files" : {
              "src": ['debug/*.css']
           },

          // When parseFiles = true, matchCommunityTests = true will attempt to
          // match user-contributed tests.
          "matchCommunityTests" : false,

          // Have custom Modernizr tests? Add paths to their location here.
          "customTests" : []
      }

    },
    
    // Combine JS modules using Browserify
    browserify: {
      options: {
        // Shim 3rd party libraries not in `node_modules`
        shim: {
          'jquery': {path: 'bower_components/jquery/jquery.js', exports: 'jQuery'},
          'fastclick': {path: 'bower_components/fastclick/lib/fastclick.js', exports: 'jQuery'},
          'jquery-jail': {path: 'bower_components/JAIL/src/jail.js', exports: 'jail'}
        }
      },
      debug: {
        src: ['app/main.js'],
        dest: 'debug/app.js',
        options: {
          debug: true
        }
      },
      build: {
        src: ['app/main.js'],
        dest: 'build/app.js'
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: [
        'last 2 version',
        'ff > 20',
        '> 1%',
        'ie 9',
        'ie 10'],
        diff: true
      },
      debug: {
        expand: true,
        cwd: 'debug',
        src: [ '**/*.css' ],
        dest: 'debug'
      },
      build: {
        expand: true,
        cwd: 'build',
        src: [ '**/*.css' ],
        dest: 'build'
      }
    },

    // Compile Sass files to CSS
    compass: {
      options: {
        sassDir: '_sass',
        noLineComments: true
      },
      debug: {
        options: {
          cssDir: 'debug',
          debugInfo: false,
          outputStyle: 'expanded'
        }
      },
      build: {
        options: {
          cssDir: 'build'
        }
      }
    },

    // Concatenate files
    concat: {
      debug: {
        files: {
          'debug/style.css': ['debug/main.css','_src/css/syntax.css']
        }
      },
      build: {
        files: {
          'build/style.css': ['build/main.css','_src/css/syntax.css']
        }
      }
    },

    // Clean CSS files
     uncss: {
      dist: {
        src: '_site/index.html',
        dest: 'assets/tmp/style.clean.css',
        options: {
          report: 'min', // optional: include to report savings
        }
      }
    },
 
    // Minify CSS files
    cssmin: {
      build: {
        files: {
          'assets/css/style.min.css': ['build/style.css']
        }
      }
    },

    // Minify JS files
    uglify: {
      build: {
        files: {
          'assets/js/app.min.js': ['build/app.js']
        }
      }
    },

    // Watch files for changes
    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['browserify:debug']
      },
      css: {
        files: ['_sass/**/*.scss','assets/css/**/*.css'],
        tasks: ['compass:debug', 'autoprefixer:debug','concat:debug']
      },
      jekyll: {
        files: [
        '_posts/*.md',
        '_includes/*.html',
        '_includes/*.md',
        '_layouts/*.html',
        '_config.yml',
        'blog_feed.xml',
        '*.html',
        'debug/*'
        ],
        tasks: ['shell:jekyllBuild']
        },
      
      // Livereload
      livereload: {
        files: [
          'assets/js/**/*.js',
          '_sass/**/*.scss',
          'assets/css/**/*.css',
          '_posts/*.md',
          '_includes/*.html',
          '_includes/*.md',
          '_layouts/*.html', 
          '_config.yml',
          '*.html'
        ],
        options: {
          livereload: true
        }
      }
    },
    // copy css files
    copy: {
        css: {
          src: 'debug/*',
          dest: '_site/debug/*'
        }
      },

    // Local server set-up
    connect: {
      server: {
        options: {
          base: '_site/',
          hostname: 'localhost',
          protocol: 'http',
          port: 9009,
          keepalive: false,
          livereload: true,
          open: true
        }
      }
    },

    // Clean target directories
    clean: {
      svg: ['assets/svg/compressed', 'assets/svg_icons/output'],
      debug: ['debug'],
      buildTemp: [
        'build/*'
      ],
      all: ['debug', 'build']
    },

    // web fonts creation
    fontina: {
      fonts: {
        src: './_src/fonts/Meddle-Regular.otf',
        dest: './_src/fonts',
        options: {
          force: false,
          output: true,
          error: true
        }
      }
    },

    // favicons creation
    favicons: {
      options: {
        trueColor: true,
        precomposed: false,
        coast: true,
        windowsTile: true,
        tileBlackWhite: true,
      },
      icons: {
        src: '_src/logo.png',
        dest: 'assets/images'
      }
    },
    "imagemagick-resize":{
      dev:{
        from:'_src/images/',
        to:'assets/images/',
        files:'*',
        props:{
          width:760
        }
      }
    },

    // svg minification
    svgmin: { //minimize SVG files
      options: {
          plugins: [
              { removeViewBox: false },
              { removeUselessStrokeAndFill: false },
              {
                convertPathData: { 
                  straightCurves: false // advanced SVGO plugin option
              }
            },
            { removeEmptyAttrs: false }
          ]
      },
      dist: {
          expand: true,
          cwd: 'assets/svg/raw',
          src: ['**/*.svg'],
          dest: 'assets/svg/compressed',
          ext: '.min.svg'
      }
    },

    // SVG data-uri with png fall-back
    grunticon: { //makes SVG icons into a CSS file
      myIcons: {
        files: [{
          expand: true,
          cwd: '_src/svg/',
          src: ['*.svg'],
          dest: '_src/svg/output',
        }],
        options: {
          datasvgcss: "/assets/css/svg.fallback.css",
          cssprefix: '.icon--'
        }
      }
    }
  });

  // Compile JS & CSS, run watch to recompile on change
  grunt.registerTask('debug', function(target) {
    // Rebuild './debug'
    grunt.task.run([
      'clean:debug',
      'compass:debug',
      'autoprefixer:debug',
      'browserify:debug',
      'concat:debug',
      'copy:css',
      'connect:server',
      'watch'
    ]);
  });

  // Run Jekyll build with environment set to production
  grunt.registerTask('jekyll-production', function() {
    grunt.log.writeln('Setting environment variable JEKYLL_ENV=production');
    process.env.JEKYLL_ENV = 'production';
    grunt.task.run(['shell:jekyllBuild']);
  });

  // Compile and minify JS & CSS, run Jekyll build for production 
  grunt.registerTask('build', [
    'clean:all',
    'compass:build',
    'browserify:build',
    'concat:build',
    'cssmin',
    'uglify',
    'clean:buildTemp',
    'jekyll-production'
  ]);

  // grunt.registerTask('favicons:icons');

  grunt.registerTask('default', [
    'debug',
    'svgmin',
    'grunticon',
    'imagemagick-resize',
    'fontina',
    'modernizr',
    'csslint:lax' // run as seperate task to avoid csslint going nuts!!
    ]);

};