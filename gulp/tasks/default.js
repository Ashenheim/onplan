/* ====================================
    Default
==================================== */
var gulp =  require('gulp');

/*
    Tasks & Functions
------------------------------------ */

gulp.task('default', ['copy', 'jade', 'style', 'scripts', 'watch', 'browsersync']);
