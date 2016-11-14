// Imports
	//Controllers
	var saludarController = require('./saludar/controller.js');
	//Directives
	var saludarDirective = require('./saludar/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('saludar', saludarController);
		// Directives
		app.directive('saludar', saludarDirective);
	}