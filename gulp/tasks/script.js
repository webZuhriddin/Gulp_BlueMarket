module.exports = () =>
    $.gulp.task('js', () =>
        $.gulp.src($.path.src.js)
            .pipe($.GP.include())
            .pipe($.GP.babel())
            .pipe($.gulp.dest($.path.dist.js))
            .on('end', $.bs.reload)
    )
        