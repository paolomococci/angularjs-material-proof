(function () {
    'use strict';
    angular.module('dropdownMenuProof', ['ngMaterial'])
        .config(function($mdIconProvider) {
            $mdIconProvider
                .icon("doc", '/img/icons/ic_book.svg', 24)
                .icon("call-number", '/img/icons/ic_phone.svg', 24)
                .icon("email", '/img/icons/ic_email.svg', 24)
                .icon("chat", '/img/icons/ic_chat.svg', 24);
        }).controller('dropdownMenuCtrl', function($mdDialog) {
            var ctrl = this;
            this.docClicked = function(index) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('you clicked on the document menu')
                        .textContent('document item at index: ' + (++index))
                        .ok('hi')
                    );
            };
            this.phoneClicked = function(index) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('you clicked on the phone menu')
                        .textContent('phone item at index: ' + (++index))
                        .ok('hi')
                    );
            };
            this.emailClicked = function(index) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('you clicked on the email menu')
                        .textContent('email item at index: ' + (++index))
                        .ok('hi')
                    );
            };
            this.chatClicked = function(index) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('you clicked on the chat menu')
                        .textContent('chat item at index: ' + (++index))
                        .ok('hi')
                    );
            };
        });
})();
