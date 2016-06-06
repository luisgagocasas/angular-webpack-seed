
// Imports
	var angular = require('angular');
	var angularUiRouter = require('angular-ui-router');

// Setup App
	// App
	var app = angular.module('app', ['ui.router']);
	// Config
	app.config(require('./app.config.js'));
	// Container
	app.directive('appContainer', require('./app.directive.js'));