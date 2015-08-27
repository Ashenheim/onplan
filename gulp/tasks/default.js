/* ====================================
    Default
==================================== */
var gulp = require('gulp');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('build', [
    'copy',
    'jade',
    'style',
    'scripts'
]);

gulp.task('serve', [
    'watch',
    'browsersync'
]);

gulp.task('default', [
    'build',
    'serve'
]);
