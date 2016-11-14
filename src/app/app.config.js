module.exports = function ($stateProvider, $urlRouterProvider, $compileProvider) {
	// Router
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: 'Inicio'
		})
		.state('saludar', {
			url: '/saludar',
			template: '<div saludar></div>'
		})
		.state('persona', {
			url: '/persona',
			template: '<div persona></div>'
		})
			.state('persona.personaMasculino', {
				url: '/masculino',
				template: '<div persona-masculino></div>'
			})
			.state('persona.personaFemenino', {
				url: '/femenino',
				template: '<div persona-femenino></div>'
			})
}