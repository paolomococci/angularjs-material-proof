(function () {
    'use strict';
    angular.module('cardProof', ['ngMaterial'])
        .controller('cardCtrl', function($scope) {
            $scope.voidImagePath = '/img/cards/void.svg';
            $scope.starImagePath = '/img/cards/star.svg';
            $scope.squareImagePath = '/img/cards/square.svg';
            $scope.circleImagePath = '/img/cards/circle.svg';
        })
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('some-lime').backgroundPalette('lime').dark();
            $mdThemingProvider.theme('some-orange').backgroundPalette('orange').dark();
            $mdThemingProvider.theme('some-purple').backgroundPalette('deep-purple').dark();
            $mdThemingProvider.theme('some-red').backgroundPalette('red').dark();
          });
})();
