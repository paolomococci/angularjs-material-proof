(function () {
    'use strict';
    angular.module('sliderProof', ['ngMaterial'])
        .controller('sliderCtrl', function($scope) {
            $scope.percentageValues = {
                bass: 45,
                medium: 50,
                high: 55,
                volume: 40
            };
    });
})();
