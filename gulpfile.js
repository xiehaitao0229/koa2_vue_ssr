const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require("rollup-plugin-replace");
const eslint = require('gulp-eslint');
const gulpSequence = require('gulp-sequence')
gulp.task('builddev', () => {
    return watch('./src/nodeuii/**/*.js', {
        ignoreInitial: false
    }, () => {
        gulp.src('./src/nodeuii/**/*.js')
            .pipe(babel({
                //不让外部的.babelrc印象内部
                babelrc: false,
                "plugins": [
                    "transform-decorators-legacy",
                    "transform-es2015-modules-commonjs"
                ]
            }))
            .pipe(gulp.dest('dist'))
    })
});
gulp.task('buildprod', () => {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
            //不让外部的.babelrc影响内部
            babelrc: false,
            ignore: ['./src/nodeuii/config/*.js'],
            "plugins": [
                "transform-decorators-legacy",
                "transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('buildconfig', () => {
    gulp.src('./src/nodeuii/pm2.json')
        .pipe(gulp.dest('dist'));
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(rollup({
            output: {
                format: "cjs",
            },
            input: './src/nodeuii/config/index.js',
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('dist'));
});
gulp.task('lint', () => {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
let _task = ["builddev"];
//上线阶段 hint 编译 清洗&拷贝热启动文件
if (process.env.NODE_ENV == "production") {
    _task = gulpSequence(["lint", 'buildprod', 'buildconfig']);
}
if (process.env.NODE_ENV == "lint") {
    _task = ["lint"];
}
gulp.task("default", _task);
