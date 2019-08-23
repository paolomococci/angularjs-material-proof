(function () {
    'use strict';
    angular.module('sampleDirectivesProof', ['ngMaterial', 'ngMessages'])
        .controller('sampleDirectivesCtrl', function() {

        })
        .directive('pmSample', function() {
            return {
                restrict: 'E',
                template: "<h3>sample title element</h3>"
            }
        })
        .directive('pmArticle', function() {
            return {
                restrict: 'E',
                templateUrl: '/html/elements/pm-article.html'
            }
        })
        .directive('pmPerson', function() {
            return {
                restrict: 'E',
                $scope: { person: "=person" },
                templateUrl: '/html/elements/pm-person.html'
            }
        })
        .directive('pmUser', function() {
            return {
                restrict: 'E',
                $scope: {user: "=user"},
                templateUrl: '/html/elements/pm-user.html'
            }
        });
})();
