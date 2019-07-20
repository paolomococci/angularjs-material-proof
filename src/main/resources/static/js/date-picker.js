angular.module('datePickerProof', ['ngMaterial', 'ngMessages'])
    .controller('datePickerCtrl', function() {
    this.myDate = new Date();
    this.isOpen = false;
});
