(function () {
    'use strict';

    var module = angular.module('layout.dashboard', ['ui.router', 'ngMaterial'])
        .config(function($stateProvider) {
            $stateProvider.state('dashboard', {
                url: '/',
                templateUrl: 'src/views/dashboard/dashboard.html',
                controller: 'DashboardLayoutController',
                controllerAs: 'vm'
            })
        })

})();
