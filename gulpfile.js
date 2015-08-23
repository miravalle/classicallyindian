var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var exec = require('child_process').exec;
var minifyCss = require('gulp-minify-css');
var livereload = require('gulp-livereload');

var paths = {
    scripts: 'src/js/*.js',
    css: './src/css/*.css',
    routes: ['routes/*.js', 'server.js']
};


gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'))
        .pipe(livereload());
});

gulp.task('views', function(){
    return gulp.src('views/*.jade')
    .pipe(livereload());
})
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.css, ['css']);
    gulp.watch('*', ['server']);
    gulp.watch('views/*.jade', ['views'])
});

gulp.task('css', function() {
    return gulp.src(paths.css)
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(concat('min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(livereload());;
});

gulp.task('server', function(cb) {
    exec('node server.js', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
gulp.task('default', ['watch', 'scripts', 'server']);
