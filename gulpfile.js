/**
 * Created by ioan on 14.12.2015.
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnext,
        precss
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});