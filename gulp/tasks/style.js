/* ====================================
    stylus
==================================== */
var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var postcss     = require('gulp-postcss');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var config      = require('../config.js').style;


/*
    Tasks & Functions
------------------------------------ */

// Error handler
var onError = function (err) {
    var errorMessage =
        '<span style="color: #f10000;">Sass error: </span>' + err.message +
        '<span style="display: block; color: #ccc; font-size: 80%;"> on line: <span style="color: #fff;">' +
            err.line +
        '</span></span>' +
        '<span style="display: block; color: #ccc; font-size: 80%;"> in file: <span style="color: #fff;">' + err.file + '</span></span>';

    console.log(err);
    browserSync.notify(errorMessage);
    this.emit('end');
};

gulp.task('style', function() {
    browserSync.notify('<span style="color: grey">Running:</span> Stylus compiling');
    return gulp.src( config.src )
        .pipe(plumber({ errorHandler: onError }))
        .pipe(stylus(config.settings.stylus))
        .pipe(postcss(config.settings.postcss))
        .pipe(gulp.dest( config.dest ))
        .pipe( browserSync.reload({stream:true}) );
});
