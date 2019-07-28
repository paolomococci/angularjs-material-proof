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
            $mdThemingProvider.theme('some-amber').backgroundPalette('amber').dark();
            $mdThemingProvider.theme('some-indigo').backgroundPalette('indigo').dark();
            $mdThemingProvider.theme('some-cyan').backgroundPalette('cyan').dark();
            $mdThemingProvider.theme('some-red').backgroundPalette('red').dark();
            $mdThemingProvider.theme('some-grey').backgroundPalette('grey').dark();
          });
})();
