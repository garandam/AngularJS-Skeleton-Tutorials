(function() {
    'use strict';

    angular
        .module('app.welcome')
        .controller('WelcomeController', WelcomeController);

    /* @ngInject */
    function WelcomeController() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Welcome';

        activate();

        function activate() {
            console.log("Activate Welcome View");
        }
    }
})();

