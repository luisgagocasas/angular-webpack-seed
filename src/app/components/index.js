// Imports
	//Controllers
	var saludarController = require('./saludar/controller.js');
	var personaController = require('./persona/controller.js');
	var personaMasculinoController = require('./persona-masculino/controller.js');
	var personaFemeninoController = require('./persona-femenino/controller.js');
	//Directives
	var saludarDirective = require('./saludar/directive.js');
	var personaDirective = require('./persona/directive.js');
	var personaMasculinoDirective = require('./persona-masculino/directive.js');
	var personaFemeninoDirective = require('./persona-femenino/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('saludar', saludarController);
		app.controller('persona', personaController);
		app.controller('personaMasculino', personaMasculinoController);
		app.controller('personaFemenino', personaFemeninoController);
		// Directives
		app.directive('saludar', saludarDirective);
		app.directive('persona', personaDirective);
		app.directive('personaMasculino', personaMasculinoDirective);
		app.directive('personaFemenino', personaFemeninoDirective);
	}