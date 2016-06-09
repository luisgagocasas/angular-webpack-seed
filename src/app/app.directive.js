module.exports = function () {
	return {
		restrict: 'EA',
		template: require('./app.html'),
		controller: require('./app.controller.js')
	}
}