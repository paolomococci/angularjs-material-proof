(function () {
    'use strict';
    angular.module('dialogProof', ['ngMaterial', 'ngMessages'])
        .controller('dialogCtrl', function($scope, $mdDialog) {

            $scope.status = '  ';
            $scope.customFullscreen = false;

            $scope.showAlert = function(event) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupDialogContainer')))
                        .clickOutsideToClose(true)
                        .title('alert popup title')
                        .textContent('Sample content of alert popup.')
                        .ariaLabel('sample alert dialog')
                        .ok('ok')
                        .targetEvent(event)
                );
            };

            $scope.showConfirm = function(event) {
                var confirm = $mdDialog.confirm()
                    .title('confirm popup title')
                    .textContent('Sample content of confirm popup.')
                    .ariaLabel('sample confirm dialog')
                    .targetEvent(event)
                    .ok('ok')
                    .cancel('cancel');

                $mdDialog.show(confirm).then(function() {
                    $scope.status = 'You clicked ‘OK’';
                }, function() {
                    $scope.status = 'You clicked ‘CANCEL’';
                });
            };

            $scope.showPrompt = function(event) {
                var confirm = $mdDialog.prompt()
                    .title('prompt popup title')
                    .textContent('Sample content of prompt popup.')
                    .placeholder('sample placeholder')
                    .ariaLabel('sample prompt dialog')
                    .initialValue('default')
                    .targetEvent(event)
                    .required(true)
                    .ok('ok')
                    .cancel('cancel');

                $mdDialog.show(confirm).then(function(result) {
                    $scope.status = 'You send result: ' + result;
                }, function() {
                    $scope.status = 'You clicked ‘CANCEL’';
                });
            };

            $scope.showPopupDialog = function(event) {
                $mdDialog.show({
                    controller: DialogCtrl,
                    templateUrl: '/dialog-template',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose:true
                })
                .then(function(answer) {
                    $scope.status = 'You said popup is: ' + answer ;
                }, function() {
                    $scope.status = 'You have close the popup dialog';
                });
            };

            $scope.showTabbedPopupDialog = function(event) {
                $mdDialog.show({
                    controller: DialogCtrl,
                    templateUrl: '/dialog-tab-template',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose:true
                })
                .then(function(answer) {
                    $scope.status = 'You said tabbed popup is: ' + answer;
                }, function() {
                    $scope.status = 'You have close the tabbed dialog';
                });
            };

            $scope.showPreRenderedDialog = function(event) {
                $mdDialog.show({
                    contentElement: '#preRenderedDialog',
                    parent: angular.element(document.body),
                    targetEvent: event,
                    clickOutsideToClose: true
                });
            };

            function DialogCtrl($scope, $mdDialog) {
                $scope.hide = function() {
                    $mdDialog.hide();
                };

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };
            }
    });
})();
