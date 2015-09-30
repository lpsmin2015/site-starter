var gulp = require('gulp');

var sass = require('gulp-sass');

// creation d'une nouvelle tache : 'sass'
gulp.task('sass', function () {
    // définition de la tache
    gulp.src('./src/assets/scss/**/*.scss') // définition du répertoire source
        .pipe(sass().on('error', sass.logError)) // exéc Sass
        .pipe(gulp.dest('./src/assets/css')); // écriture dans destination
});

// creation d'une nouvelle tache : 'sass:watch'
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

// ici la tache par default
gulp.task('default', function() {
  // place code for your default task here
});
