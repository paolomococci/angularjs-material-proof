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
        })
        .directive('pmPerson', function() {
            return {
                restrict: 'E',
                $scope: { person: "=person" },
                template:
                    "<section>" +
                    "<h3>section personal data</h3>" +
                    "<p>name: <em>{{ person.name }}</em></p>" +
                    "<p>surname: <em>{{ person.surname }}</em></p>" +
                    "</section>" +
                    "<section>" +
                    "<form name='personForm'>" +
                    "<fieldset>" +
                    "<legend>your name, please</legend>" +
                    "<label for='name'>name: </label>" +
                    "<input type='text' id='name' ng-model='person.name'/>" +
                    "<label for='surname'> surname: </label>" +
                    "<input type='text' id='surname' ng-model='person.surname'/>" +
                    "</fieldset>" +
                    "</form>" +
                    "</section>"
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
