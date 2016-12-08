var gulp = require('gulp')
var cssmin = require('gulp-cssmin')
var jsmin = require('gulp-jsmin')
var rename = require('gulp-rename')


gulp.task('default', function () {
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe('src/libs/css');
});