'use strict'

const gulp = require('gulp')
const browserify = require('browserify')
const hbsify = require('hbsify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

gulp.task('build', function () {
  return browserify({ entries: 'index.js' })
    .transform(babelify)
    .transform(hbsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
})

gulp.task('watch', ['build'], function () {
  gulp.watch('*.js*', ['build'])
})

gulp.task('default', ['watch'])
