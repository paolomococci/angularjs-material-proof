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
        });
})();
