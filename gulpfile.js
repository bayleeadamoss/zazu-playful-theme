var gulp = require('gulp');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var scss = require('postcss-scss');
var colorFunction = require('postcss-color-function');
var vars = require('postcss-simple-vars')

gulp.task('build', function () {
    var processors = [
      nested,
      colorFunction(),
      vars()
    ];
    return gulp.src('css/main.css')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('dist'));
});
