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
        .service('placeService', function() {
            this.places = [];
            this.addPlaceToList = function(place) {
                var temp = {
                    name: '',
                    country: '',
                    whatToDo: '',
                    whenToDoIt: '',
                    notes: ''
                };
                temp.name = place.name;
                temp.country = place.country;
                temp.whatTodo = place.whatToDo;
                temp.whenToDoIt = place.whenToDoIt;
                temp.notes = place.notes;
                this.places.push(temp);
            }
        })
        .service('peopleService', function() {
            this.list = [];
            this.addToList = function(person) {
                var temp = {name: '', surname: ''}
                temp.name = person.name;
                temp.surname = person.surname;
                this.list.push(temp);
            }
        })
        .controller('todoListCtrl', function($scope) {
            $scope.listOfPlaces =[];
            $scope.listOfPeople = [];
            $scope.listOfPhotos = [];
            $scope.listOfShares = [];
        })
        .controller('placeCtrl', function($scope, placeService) {
            $scope.addPlace = function() {
                placeService.addPlaceToList($scope.place);
                $scope.place.name = '';
                $scope.place.country = '';
                $scope.place.whatToDo = '';
                $scope.place.whenToDoIt = '';
                $scope.place.notes = '';
            }
            $scope.listOfPlaces = placeService.places;
        })
        .controller('peopleCtrl', function($scope, peopleService) {
            $scope.addPerson = function() {
                peopleService.addToList($scope.person);
                $scope.person.name = '';
                $scope.person.surname = '';
                /* TypeError: "can't assign to property "required" on false: not an object" */
                //$scope.personForm.name.$error = false;
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
