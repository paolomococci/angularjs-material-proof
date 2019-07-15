var app = angular.module('helloProof', ['ngMaterial', 'ngMessages']);

app.controller('helloCtrl', function($scope) {
    $scope.user = {
        name: '', surname: ''
    };
    $scope.hello = function() {
        return "Welcome " + $scope.user.name + " " + $scope.user.surname + "!";
    }
});
