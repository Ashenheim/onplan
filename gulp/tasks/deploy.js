/* ====================================
    Deploy
==================================== */
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');
var config      = require('../config.js').deploy;

/*
    Tasks & Functions
------------------------------------ */

gulp.task('deploy', function () {
    return gulp.src( config.src )
        .pipe(deploy())
});
