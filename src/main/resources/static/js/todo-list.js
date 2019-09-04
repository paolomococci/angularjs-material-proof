(function () {
    'use strict';
    angular.module('todoListProof', ['ngMaterial', 'ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/place', {templateUrl: '/html/partials/todo-list-place.html'})
                .when('/people', {templateUrl: '/html/partials/todo-list-people.html'})
                .when('/photo', {templateUrl: '/html/partials/todo-list-photo.html'})
                .when('/share', {templateUrl: '/html/partials/todo-list-share.html'})
                .otherwise({redirectTo: '/place'});
        })
        .controller('todoListCtrl', function() {

    });
})();
