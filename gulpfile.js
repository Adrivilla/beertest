var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

var sass_files = 'src/sass/*.scss';

gulp.task('js', function() {
	gulp.src('src/javascript/logic.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest('dist/resource/javascript'))
		.pipe(browserSync.stream())
});


gulp.task('css', function() {
	gulp.src('src/css/style.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/resource/css'))
		.pipe(browserSync.stream());
});



gulp.task('sass', function() {
	return gulp.src(sass_files)
		.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
		.pipe(gulp.dest('dist/resource/css'))
		.pipe(browserSync.stream());
});


gulp.task('serve', function() {
	browserSync.init({
		server: "./"
	});
});

gulp.task('default', ['serve', 'js', 'sass'], function() {
	gulp.watch(sass_files, ['sass']);
	gulp.watch('src/css/style.css', ['css']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});