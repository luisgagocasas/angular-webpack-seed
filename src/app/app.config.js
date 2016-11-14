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
		.state('otherwise', {
			abstract: true,
			//url: '*path',
			template: '404'
		})
}