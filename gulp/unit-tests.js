'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var $ = require('gulp-load-plugins')();

function runTests (singleRun, done) {
  new karma.Server({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function() {
    done();
  }).start();
}

gulp.task('test', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['watch'], function(done) {
  runTests(false, done);
});

gulp.task('coveralls', function () {
  if (!process.env.CI) return;
  return gulp.src('./coverage/**/lcov.info')
    .pipe($.coveralls());
});
