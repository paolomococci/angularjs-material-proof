(function () {
    'use strict';
    angular.module('toastProof', ['ngMaterial'])
        .controller('toastCtrl', toastCtrl);
        function toastCtrl($mdToast, $log) {
            var ctrl = this;
            ctrl.showToast = function() {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(
                                'this is a sample of toast message like on android'
                            )
                            .action('OK')
                            .hideDelay(3500))
                            .then(function() {
                                $log.log(
                                    'last toast message vanished'
                                );
                            }).catch(function() {
                                $log.log(
                                    'error: toast failed or was forced to close early by request of another toast'
                                );
                            });
            };
        }
})();
