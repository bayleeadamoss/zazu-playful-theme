var gulp = require('gulp')
var postcss = require('gulp-postcss')
var nested = require('postcss-nested')
var scss = require('postcss-scss')
var colorFunction = require('postcss-color-function')
var vars = require('postcss-simple-vars')
var postcssUrl = require('postcss-url')

gulp.task('build', function () {
  var processors = [
    nested,
    vars(),
    colorFunction(),
    postcssUrl({
      url: 'inline',
      maxSize: 999,
    }),
  ]
  return gulp.src('css/main.css')
    .pipe(postcss(processors, {}))
    .pipe(gulp.dest('dist'))
})
