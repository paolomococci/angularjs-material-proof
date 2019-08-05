(function () {
    'use strict';
    angular.module('dividerProof', ['ngMaterial'])
        .controller('dividerCtrl', function($scope) {
            var userImagePath = '/img/icons/ic_person.svg';
            $scope.people = [
                {
                    face: userImagePath,
                    name: 'Paul',
                    surname: 'Smith',
                    job: 'full-stack web developer'
                },
                {
                    face: userImagePath,
                    name: 'Angeline',
                    surname: 'White',
                    job: 'engineer'
                },
                {
                    face: userImagePath,
                    name: 'Jane',
                    surname: 'Green',
                    job: 'painter'
                },
                {
                    face: userImagePath,
                    name: 'John',
                    surname: 'Jones',
                    job: 'anaesthetist'
                },
                {
                    face: userImagePath,
                    name: 'Jessica',
                    surname: 'Flavour',
                    job: 'psychiatrist'
                },
                {
                    face: userImagePath,
                    name: 'Alina',
                    surname: 'Bond',
                    job: 'mathematician'
                }
            ];
    });
})();
