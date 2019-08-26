(function () {
    'use strict';
    angular.module('formsProof', ['ngMaterial', 'ngSanitize'])
        .controller('formsCtrl', function($scope) {
            $scope.adminHelp = "<em class='help'>restricted area to admins</em>";
            $scope.userHelp = "<em class='help'>area dedicated to common users</em>";
            $scope.employeeHelp = "<em class='help'>employee shifts</em>";
            $scope.jobHelp = "<em class='help'>planning of jobs</em>";
            /* form weak */
            $scope.admin = {
                name: 'John',
                surname: 'Do',
                email: 'john.do@acme.local',
                id: '02574',
                role: 'sysadmin',
                company: 'acme',
                department: 'rocket factory',
                updated: ''
            };
    });
})();
