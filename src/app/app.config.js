module.exports = function ($stateProvider, $urlRouterProvider, $compileProvider) {

	// Router
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: ':D'
		})
		.state('saludar', {
			url: '/saludar',
			template: '<div saludar></div>'
		})
}