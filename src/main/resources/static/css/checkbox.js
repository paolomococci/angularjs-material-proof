(function () {
    'use strict';
    angular.module('checkboxProof', ['ngMaterial'])
        .controller('checkboxCtrl', function($scope) {

            $scope.data = {};
            $scope.data.checkboxOne = true;
            $scope.data.checkboxTwo = false;
            $scope.data.checkboxThree = false;
            $scope.data.checkboxFour = false;
            $scope.data.checkboxFive = false;

            $scope.items = [2,3,5,7,11,13,17,19];
            $scope.selected = [2];
            $scope.toggle = function (item, list) {
                var index = list.indexOf(item);
                if (index > -1) {
                    list.splice(index, 1);
                } else {
                    list.push(item);
                }
            };

            $scope.exists = function (item, list) {
                return list.indexOf(item) > -1;
            };

            $scope.isIndeterminate = function() {
                return ($scope.selected.length !== 0 &&
                $scope.selected.length !== $scope.items.length);
            };

            $scope.isChecked = function() {
                return $scope.selected.length === $scope.items.length;
            };

            $scope.toggleAll = function() {
                if ($scope.selected.length === $scope.items.length) {
                    $scope.selected = [];
                } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
                    $scope.selected = $scope.items.slice(0);
                }
            };
    });
})();
