const gulp = require("gulp");
const favicons = require("gulp-favicons");
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("site/img/logo.png").pipe(favicons({
    appName: "Fluent bootstrap",
    appDescription: "Fluent bootstrap",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#171717",
    theme_color: "#000",
    path: "/fluent-bootstrap/icon/",
    url: "https://disjfa.github.io/fluent-bootstrap/",
    display: "standalone",
    orientation: "portrait",
    start_url: "/fluent-bootstrap/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
  }))
    .on("error", log)
    .pipe(gulp.dest("./site/icon"));
});