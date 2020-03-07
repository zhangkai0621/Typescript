/*
 * @Description: gulp 配置文件
 * @Author: zhangkai
 * @Date: 2020-03-07 21:09:55
 * @LastEditTime: 2020-03-07 22:06:19
 * @LastEditors: zhangkai
 */
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
// 默认任务
// export default function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// 创建一个任务
gulp.task('js', () => {
    return gulp.src('src/js/*.js')
    .pipe(concat('all.js')) // 合并所有js文件为 all.js
    .pipe(babel()) // 使用 babel 兼容ES6的代码
    .pipe(uglify()) // 压缩js文件
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js')); // 终止任务并输出文件流至 dist/js
})


  