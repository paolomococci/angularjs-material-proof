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
        .controller('todoListCtrl', function($scope) {
            $scope.listOfPlaces =[];
            $scope.listOfPeople = [];
            $scope.listOfPhotos = [];
            $scope.listOfShares = [];
        })
        .controller('placeCtrl', function($scope) {
            $scope.addPlace = function() {
                $scope.listOfPlaces.push($scope.place)
            }
        })
        .controller('peopleCtrl', function($scope) {
            $scope.addPerson = function() {
                $scope.listOfPeople.push($scope.name)
            }
        })
        .controller('photoCtrl', function($scope) {
            $scope.addPhoto = function() {
                $scope.listOfPhotos.push($scope.photo)
            }
        })
        .controller('shareCtrl', function($scope) {
            $scope.addShare = function() {
                $scope.listOfShares.push($scope.share)
            }
        });
})();
