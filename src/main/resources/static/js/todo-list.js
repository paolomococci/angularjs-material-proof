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
        .controller('todoListCtrl', function($scope) {
            $scope.listOfPlaces = [
                {
                    name: 'Chiang Rai, Thailand',
                    whatToDo: 'visit the white temple Wat Rong Khun',
                    whenToDoIt: '12/5/2019 9:00AM',
                    notes: "very beautiful"
                },
                {
                    name: 'Chiang Rai, Thailand',
                    whatToDo: 'visit Wat Phra Kaew',
                    whenToDoIt: '12/5/2019 14:00PM',
                    notes: "the ancient Wat Pa Yiah"
                },
                {
                    name: 'Chiang Mai, Thailand',
                    whatTodo: 'visit the Wat Phrathat Doi Suthep',
                    whenToDoIt: '12/7/2019 10:00AM',
                    notes: "perhaps I will listen to live folk music"
                }
            ];
    });
})();
