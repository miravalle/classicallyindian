var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var exec = require('child_process').exec;

var paths = {
    scripts: 'src/js/*.js',
    routes: ['routes', 'server.js']
};

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts) 
    // with sourcemaps all the way down 
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.routes, ['server']);
});

gulp.task('server', function(cb) {
    exec('node server.js', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task('default', ['watch', 'scripts', 'server']);
