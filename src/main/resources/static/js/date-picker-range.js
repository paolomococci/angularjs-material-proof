(function () {
    'use strict';
    angular.module('datePickerRangeProof', ['ngMaterial'])
        .controller('datePickerRangeCtrl', function() {
            this.startDate = new Date();
            this.endDate = new Date();
            this.endDate.setDate(this.endDate.getDate() + 5);
    });
})();
