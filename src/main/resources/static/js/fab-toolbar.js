(function () {
    'use strict';
    angular.module('fabToolbarProof', ['ngMaterial'])
        .controller('fabToolbarCtrl', function($scope) {
            $scope.isOpen = false;
            $scope.proof = {
                isOpen: false,
                count: 0,
                selectedDirection: 'left'
            };
    });
})();
