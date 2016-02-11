var gulp = require('gulp');
var connect = require('gulp-connect');


//
// Gulp server
//
gulp.task('server', function() {
  connect.server({
    root: '',
    livereload: true,
    fallback: 'index.html',
    port: 8080
  });
});

gulp.task('default', ['server'])
