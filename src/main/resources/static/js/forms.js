(function () {
    'use strict';
    angular.module('formsProof', ['ngMaterial', 'ngSanitize'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('orange-dark')
                .primaryPalette('orange')
                .dark();
        })
        .controller('formsCtrl', function($scope) {
            $scope.adminHelp = "<em class='help'>restricted area to admins</em>";
            $scope.userHelp = "<em class='help'>area dedicated to common users</em>";
            $scope.employeeHelp = "<em class='help'>employee shifts</em>";
            $scope.jobHelp = "<em class='help'>planning of jobs</em>";
            /* form weak */
            $scope.admin = {
                name: 'John',
                surname: 'Do',
                username: 'john.do',
                email: 'john.do@acme.local',
                id: '02574',
                role: 'sysadmin',
                company: 'acme',
                department: 'rocket factory',
                phone: '',
                updated: ''
            };
            /* form nice */
            $scope.user = {
                name: 'Nike',
                surname: 'Stay',
                nickname: 'mariposa',
                address: 'Champion\'s road, 123',
                email: 'nike.stay@acme.local',
                id: '10267',
                role: 'user',
                company: 'acme',
                department: 'accounting',
                phone: '0123456789',
                liking: 0,
                updated: ''
            };
    });
})();
