var gulp = require('gulp');

var rename = require('gulp-rename');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});

gulp.task('bowerScript', function() {
    // 找到
    gulp.src('bower_components/*/dist/*.min.js')
        // 重新设置目录结构
        .pipe(rename({dirname: ''}))
        // 另存
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('script', function() {
    // 找到
    gulp.src('static/*.js')
        // 重新设置目录结构
        .pipe(rename({dirname: ''}))
        // 另存
        .pipe(gulp.dest('public/javascripts'));
});