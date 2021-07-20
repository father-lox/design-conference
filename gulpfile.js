const {src, dest, watch, parallel} = require("gulp");

const browserSync = require('browser-sync').create();
const less = require('gulp-less');

const LessAutoprefix = require("less-plugin-autoprefix");
const autoprefix = new LessAutoprefix({ browsers: ['cover 99.5%', "last 10 version", "IE 11"] });


const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");

function LESSpreprocessing() {
  return src('build/less/*.less')
    .pipe(less({
        plugins: [autoprefix]
      }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());;
};

function HTMLpreprocessing() {
    return src("build/*.html")
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

function image() {
    return src("build/img/**/*")
        .pipe(dest('dist/img/'))
}

function fontConverter() {
    // src("build/fonts/*.ttf")
    //     .pipe(ttf2woff())
    //     .pipe(dest("dist/fonts/"));
    return src("build/fonts/*.ttf")
        .pipe(dest("dist/fonts/"));
    // return src("build/fonts/*.ttf")
    //     .pipe(ttf2woff2())
    //     .pipe(dest("dist/fonts/"));
}

function browser() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
}

function watching() {
    watch(["build/less/**/*.less"], LESSpreprocessing);
    watch(["build/*.html"], HTMLpreprocessing);
    watch(["build/img/**/*"], image);
    watch("dist/*.html").on('change', browserSync.reload);
    watch(["build/fonts/*"], fontConverter);
}

exports.image = image;
exports.LESSpreprocessing = LESSpreprocessing;
exports.HTMLpreprocessing = HTMLpreprocessing;
exports.watching = watching;
exports.browser = browser;
exports.fontConverter = fontConverter;

exports.default = parallel(browser, watching);