"use strict";
// Imports
    var template = require('./template.html');
    var style = require('./style.css');
// Exports
    function directive() {
        return {
            controller: 'saludar as component',
            restrict: 'EA',
            template: template
        };
    }
    exports.directive = directive;