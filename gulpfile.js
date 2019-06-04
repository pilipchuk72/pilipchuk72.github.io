
global.$={
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    sass: require('gulp-sass'),
    bs:require('browser-sync').create(),
    imgm: require('gulp-imagemin'),

    path:{
        tasks:require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)()
})

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:dev'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'img:build'),
    $.gulp.parallel('watch', 'serve')
));