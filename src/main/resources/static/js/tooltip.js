(function () {
    'use strict';
    angular.module('tooltipProof', ['ngMaterial', 'ngMessages'])
        .controller('tooltipCtrl', function($scope) {
            $scope.proof = {
                showTooltip: false,
                tipDirection: 'bottom'
            };
            $scope.proof.delayTooltip = undefined;
            $scope.$watch('proof.delayTooltip', function(delay) {
                $scope.proof.delayTooltip = parseInt(delay, 10) || 0;
            });
    });
})();
