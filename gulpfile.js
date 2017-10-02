var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

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
	gulp.src('src/sass/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist/resource/css'))
		.pipe(browserSync.stream());
});

gulp.task('serve', function() {
	browserSync.init({
		server: "./"
	});
});

gulp.task('default', ['serve', 'js', 'sass', 'css'], function() {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/css/style.css', ['css']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});