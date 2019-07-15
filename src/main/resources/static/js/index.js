angular.module('indexProof', ['ngMaterial'])
    .controller('AppCtrl', function ($scope, $mdSidenav) {
        $scope.toggleLeft = buildToggleOfNavigation('left');
        function buildToggleOfNavigation(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }
    });
