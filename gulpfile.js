const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

function css() {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([tailwindcss, autoprefixer()]))
    .pipe(gulp.dest("dist"));
}

function watch() {
  gulp.watch("src/**/*.css", css);
}

exports.css = css;
exports.watch = watch;
