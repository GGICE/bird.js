var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var sourcemaps = require('gulp-sourcemaps')
var babel = require('gulp-babel')
var concat = require('gulp-concat')


//start browser
gulp.task('browser-sync', function() {
  browserSync({
    port: 9210,
    files: 'index.html',
    server: {
      baseDir: './'
    }
  })
})

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})

gulp.task('devBuild', function() {
  /* watch .sass|.scss files */
  gulp.watch(['src/**/*.js'], ['build'])
})
gulp.task('dev', ['devBuild', 'browser-sync'], function() {
  gulp.watch(['dist/**/*.js']).on('change', reload)
})
