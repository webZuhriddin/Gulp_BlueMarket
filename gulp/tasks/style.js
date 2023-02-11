const sass = require('gulp-sass')(require('sass'));

module.exports = () =>
    $.gulp.task('css', () =>
        $.gulp.src($.path.src.css)
            .pipe(sass( {outputStyle: 'expanded'}))
            .pipe($.GP.autoprefixer())
            .pipe($.GP.groupCssMediaQueries())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe($.gulp.dest($.path.dist.css))
            .on('end', $.bs.reload)
    )