var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    opn = require('opn'),
    sourcemaps = require('gulp-sourcemaps');

var sourcePaths = {
    styles: ['scss/*.scss'],
    scripts: ['js/*.js'],
};

var distPaths = {
    styles: 'css',
};

var server = {
    host: 'localhost',
    port: '3333'
};

gulp.task('scss', function() {
    gulp.src( sourcePaths.styles )
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest( distPaths.styles ));
});

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false,
    }));
});

gulp.task('openbrowser', function() {
    opn('http://' + server.host + ':' + server.port);
});

gulp.task('watch', function() {
    gulp.watch(distPaths.styles);
    // gulp.watch(sourcePaths.styles, ['scss']);
    gulp.watch(sourcePaths.scripts);
});

// gulp.task('build', ['scss']);
gulp.task('default', ['watch', 'webserver', 'openbrowser']);


