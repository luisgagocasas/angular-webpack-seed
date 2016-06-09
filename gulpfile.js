// Imports
	var gulp = require('gulp-param')(require('gulp'), process.argv);
	var shell = require('shelljs');
	var open = require('open');

// Tasks

	// Serve app
	gulp.task('serve', function () {
		open('http://localhost:8080/src');
		shell.exec('node_modules/.bin/webpack-dev-server --progress --colors --watch --inline --open');
	});

	// Build app
	gulp.task('build', function () {
		shell.exec('node_modules/.bin/webpack');
	});