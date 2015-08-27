/* ====================================
    Watch
==================================== */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config.js');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch:copy', function() {
    gulp.watch( config.copy.src, ['copy']);
});

gulp.task('watch:jade', function() {
    gulp.watch( config.jade.watch, ['jade']);
});

gulp.task('watch:style', function() {
    gulp.watch( config.style.watch, ['style']);
});

gulp.task('watch:scripts', function() {
    gulp.watch( config.scripts.watch, ['scripts']);
});

gulp.task('watch', ['watch:copy' ,'watch:jade', 'watch:style', 'watch:scripts']);
