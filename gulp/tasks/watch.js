module.exports = () => 
    $.gulp.task('watch', () => {
        // $.gulp.watch($.path.watch.html, $.gulp.series('html'))
        for(const key in $.path.watch) {
            $.gulp.watch($.path.watch[key], $.gulp.series(key))
        }
    })