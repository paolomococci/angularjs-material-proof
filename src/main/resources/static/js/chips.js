(function () {
    'use strict';
    angular.module('chipsProof', ['ngMaterial', 'ngMessages'])
        .config(['$mdIconProvider', function($mdIconProvider) {
            $mdIconProvider.icon('md-close', '/img/icons/ic_close.svg', 24);
        }])
        .controller('chipsCtrl', function($timeout, $q, $log) {
            var self = this;
            self.readonly = false;
            self.nativeVineNames = [
                'colorino',
                'sagrantino',
                'sangiovese'
            ];
            self.ngChangeNativeVineNames = angular.copy(self.nativeVineNames);
            self.roNativeVineNames = angular.copy(self.nativeVineNames);
            self.editableNativeVineNames = angular.copy(self.nativeVineNames);
            self.tags = [];
            self.onModelChange = function(newModel) {
                $log.log('the model has changed to: ' + newModel);
            };
    });
})();
