var gulp = require('gulp')
	  concat = require('gulp-concat'),
	  prefix = require('gulp-autoprefixer'),
	  sass = require('gulp-sass'),
	  pug = require('gulp-pug')
	  livereload = require('gulp-livereload')
    sourcemaps = require('gulp-sourcemaps')
    minify = require('gulp-minify');


 //*Your First Task
// gulp.task('nakhla', function () {

//   console.log('Gratz For Your First Task');

// });

// Html Task - Pug
gulp.task('html', function () {
	 require('./server.js');
  return gulp.src('stage/html/*.pug')
         .pipe(pug({pretty: true}))
         .pipe(gulp.dest('dist'))
         .pipe(livereload());
         
});
// Css Task
/*gulp.task('style', function () {
  return gulp.src('stage/css/*.css')
  		 .pipe(prefix('last 2 versions'))
  		 .pipe(concat('main.css'))
  		 .pipe(gulp.dest('dist/css'))
});*/

// sass Task
gulp.task('scss', function () {
  return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
       .pipe(sourcemaps.init())
  		 .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  		 .pipe(prefix('last 2 versions'))
  		 .pipe(concat('main.css'))
       .pipe(sourcemaps.write('.'))
  		 .pipe(gulp.dest('dist/css'))
  		 .pipe(livereload());
});
// Js Task
gulp.task('js', function () {
  return gulp.src('stage/js/*.js')
  		 .pipe(concat('main.js'))
       .pipe(minify())
  		 .pipe(gulp.dest('dist/js'))
  		 .pipe(livereload());
});

//Watch task
gulp.task('watch', function () {
  require('./server.js');
  livereload.listen();
  gulp.watch('stage/html/*.pug', ['html']);
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ['scss']);
  gulp.watch('stage/js/*.js', ['js']);
  });