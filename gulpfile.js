const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const include = require("gulp-file-include");

function scss() {
    return src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(concat("global.css"))
        .pipe(csso())
        .pipe(dest("public"))
}

function html() {
    return src(["./src/*.html", "!./src/header.html"])
        .pipe(include())
        .pipe(dest("public"))
}

function js() {
    return src("./src/js/*.js")
        .pipe(concat('app.js'))
        .pipe(dest("public"))
}

function reload(done) {
    browserSync.reload()
    done()
}

function serve() {
    browserSync.init({
        server: {
            baseDir: 'public'
        },
    });
    watch("./src/**/*.{html,scss,js}", series(scss, html, js, reload))
}

module.exports.build = series(scss, html, js);
module.exports.serve = series(scss, html, js, serve);
