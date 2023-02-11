module.exports = () =>
    $.gulp.task('font', () =>
        $.gulp.src($.path.src.font)
            .pipe($.GP.ttf2woff())
            .pipe($.gulp.dest($.path.dist.font))
            .on('end', $.bs.reload)
    )