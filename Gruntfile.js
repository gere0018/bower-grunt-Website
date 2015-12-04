module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          // From the bower_components folder, copy the whole font-awesome/fonts folder to /dist/fonts 
          {expand: true, 
           flatten: true, 
           src: ['bower_components/components-font-awesome/fonts/*'], 
           dest: 'dist/fonts'},
           //  From the bower_components folder, copy bootstrap/dist/css/bootstrap.css to /dist/css/bootstrap.css and bootstrap/dist/js/bootstrap.js to /dist/js/bootstrap.js
          {
            src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
            dest: 'dist/css/bootstrap.css'},
          //  From the bower_components folder, copy the font-awesome/css/font-awesome.css to /dist/css/font-awesome.css
          {
            src: ['bower_components/components-font-awesome/css/font-awesome.css'],
            dest: 'dist/css/font-awesome.css'},
          // From the bower_components folder, copy the jquery/dist/jquery.js file to /dist/js/jquery.js
           { src: ['bower_components/jquery/dist/jquery.js'],
            dest: 'dist/js/jquery.js'},
           // From your css folder, copy the main.css file to /dist/css/main.css
            {src: ['css/main.css'],
            dest: 'dist/css/main.css'},
            //  From your js folder, copy the main.js file to /dist/js/main.js
            {src: ['js/main.js'],
            dest: 'dist/js/main.js'},
            //  Copy your index.html file to /dist/index.html
            {src: ['index.html'],
            dest: 'dist/index.html'}
        ],
      },
    },
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        target: {
          //first parameter is the final end file, other parameters inside brackets are
          //the files we want to combine and minify
            files: { 'dist/js/main.min.js': 
            ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js'] }
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        //first parameter is the final end file, other parameters inside brackets are
        //the files we want to combine and minify
        files: {
          'dist/css/main.min.css':
           ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
        }
      }
    },
      // Skipping: Deletes all .js files, but skips min.js files same for css
      //the ! indicates what not to delete

  clean: {
        css: ["dist/css/*.css", "!dist/css/*.min.css"],
        js: ["dist/js/*.js", "!dist/js/*.min.js"]
      }
    
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
 
 //default tasks when we run grunt

  grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

};