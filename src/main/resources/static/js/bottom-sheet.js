(function () {
    'use strict';
    angular.module('bottomSheetProof', ['ngMaterial'])
        .config(function($mdIconProvider) {
            $mdIconProvider
                .icon('share', '/img/icons/ic_share.svg', 24)
                .icon('upload', '/img/icons/ic_file_upload.svg', 24)
                .icon('copy', '/img/icons/ic_content_copy.svg', 24)
                .icon('cut', '/img/icons/ic_content_cut.svg', 24)
                .icon('paste', '/img/icons/ic_content_paste.svg', 24)
                .icon('print', '/img/icons/ic_print.svg', 24)
                .icon('email', '/img/icons/ic_email.svg', 24)
                .icon('message', '/img/icons/ic_message.svg', 24)
                .icon('photo', '/img/icons/ic_photo.svg', 24)
                .icon('attach', '/img/icons/ic_attach_file.svg', 24);
        })
        .controller('bottomSheetCtrl', function($scope, $timeout, $mdBottomSheet, $mdToast) {
            $scope.alert = '';
            $scope.showListBottomSheet = function() {
                $scope.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'bottom-sheet-list-sub-template',
                    controller: 'listBottomSheetCtrl'
                }).then(function(clickedItem) {
                    $scope.alert = clickedItem['name'] + ' clicked!';
                }).catch(function(error) {});
            };
            $scope.showGridBottomSheet = function() {
                $scope.alert = '';
                $mdBottomSheet.show({
                    templateUrl: 'bottom-sheet-grid-sub-template',
                    controller: 'gridBottomSheetCtrl',
                    clickOutsideToClose: false
                }).then(function(clickedItem) {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent(clickedItem['name'] + ' clicked!')
                        .position('top right')
                        .hideDelay(1750)
                    );
                }).catch(function(error) {});
            };
    })
    .controller('listBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Share', icon: 'share' },
            { name: 'Upload', icon: 'upload' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Cut', icon: 'cut' },
            { name: 'Paste', icon: 'paste' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .controller('gridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [
            { name: 'Print', icon: 'print' },
            { name: 'Email', icon: 'email' },
            { name: 'Message', icon: 'message' },
            { name: 'Photo', icon: 'photo' },
            { name: 'Attach', icon: 'attach' },
        ];
        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .run(function($templateRequest) {
        var urls = [
            '/img/icons/ic_share.svg',
            '/img/icons/ic_file_upload.svg',
            '/img/icons/ic_content_copy.svg',
            '/img/icons/ic_content_cut.svg',
            '/img/icons/ic_content_paste.svg',
            '/img/icons/ic_print.svg',
            '/img/icons/ic_email.svg',
            '/img/icons/ic_message.svg',
            '/img/icons/ic_photo.svg',
            '/img/icons/ic_attach_file.svg'
        ];
        angular.forEach(urls, function(url) {
            $templateRequest(url);
        });
    });
})();
