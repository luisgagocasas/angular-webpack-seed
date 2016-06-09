module.exports = function (app) {

	app.factory('network', require('./network.factory.js'));
	app.factory('ui', require('./ui.factory.js'));

}