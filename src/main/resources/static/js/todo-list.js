(function () {
    'use strict';
    angular.module('todoListProof', [
        'ngMaterial',
        'ngRoute',
        'ngMessages'
    ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/place', {templateUrl: '/html/partials/todo-list-place.html'})
                .when('/people', {templateUrl: '/html/partials/todo-list-people.html'})
                .when('/photo', {templateUrl: '/html/partials/todo-list-photo.html'})
                .when('/share', {templateUrl: '/html/partials/todo-list-share.html'})
                .otherwise({redirectTo: '/place'});
        })
        .service('peopleService', function() {
                this.list = [];
                this.addToList = function(temp) {
                this.list.push(temp);
            }
        })
        .controller('todoListCtrl', function($scope) {
            $scope.listOfPlaces =[];
            $scope.listOfPeople = [];
            $scope.listOfPhotos = [];
            $scope.listOfShares = [];
        })
        .controller('placeCtrl', function($scope) {
            $scope.addPlace = function() {

            }
        })
        .controller('peopleCtrl', function($scope, peopleService) {
            $scope.addPerson = function() {
                peopleService.addToList($scope.name);
                $scope.name = '';
                $scope.personForm.name.$error = false;
            }
            $scope.listOfPeople = peopleService.list;
        })
        .controller('photoCtrl', function($scope) {
            $scope.addPhoto = function() {

            }
        })
        .controller('shareCtrl', function($scope) {
            $scope.addShare = function() {

            }
        });
})();
