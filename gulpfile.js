// const { task } = require('gulp');

const { task } = require('gulp');

global.$ = require('./gulp.config')

console.log($);

$.path.tasks.forEach(task => require(task)())

for(const taskName in $.tasks) {
    $.gulp.task(taskName, $.gulp.series($.gulp.parallel(...$.tasks[taskName])))
}

