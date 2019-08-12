(function () {
    'use strict';
    angular.module('switchProof', ['ngMaterial'])
        .controller('switchCtrl', function($scope) {
            $scope.sixState = 'false';
            $scope.data = {
                switchOne: true,
                switchTwo: 'DOWN',
                switchThree: false,
                switchFour: true,
                switchFive: false,
                switchSeven: true
            };
            $scope.switchSixStateOnChange = function(switchSixState) {
                $scope.sixState = switchSixState;
            };
    });
})();
