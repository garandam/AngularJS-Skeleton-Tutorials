(function () {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed.
         */
        'ui.router',

        /* Feature areas*/
        'app.welcome'
    ]).config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function routeConfig($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: 'app/welcome/welcome.html',
                controller: 'WelcomeController',
                controllerAs: 'vm'
            })

    }

})();

