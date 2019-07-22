(function () {
    'use strict';
    angular.module('buttonGridProof', ['ngMaterial'])
        .controller('buttonGridCtrl', function($scope) {
            $scope.titleOne = 'Button';
            $scope.titleTwo = 'Warn';
            $scope.isDisabled = true;
            $scope.homeUrl = '/';
    });
})();
