(function () {
    'use strict';
    angular.module('todoListProof', ['ngMaterial', 'ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {template: '<h2>home</h2>'})
                .when('/login', {template: '<h2>login</h2>'})
                .when('/photo', {template: '<h2>photo</h2>'})
                .when('/share', {template: '<h2>share</h2>'})
                .when('/chat', {template: '<h2>chat</h2>'})
                .otherwise({redirectTo: '/'});
        })
        .controller('todoListCtrl', function() {

    });
})();
