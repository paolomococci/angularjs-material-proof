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
                template:
                    "<article>" +
                    "<h2>title of article</h2>" +
                    "<section>" +
                    "<h3>title of section one</h3>" +
                    "<p>paragraph of section one</p>" +
                    "</section>" +
                    "<section>" +
                    "<h3>title of section two</h3>" +
                    "<p>paragraph of section two</p>" +
                    "</section>" +
                    "<section>" +
                    "<h3>title of section three</h3>" +
                    "<p>paragraph of section three</p>" +
                    "</section>" +
                    "</article>"
            }
        });
})();
