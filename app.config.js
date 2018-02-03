(function (angular) {
    'use script'

    var app = angular.module('app', [

        'chart.js',
        'layout.dashboard',
        'component.form',
        'component.lineChart',
        'component.barChart',
        'component.pieChart',
        'component.radarChart',
        'ngFileSaver',
        'ngMessages',
        'duScroll',
        'sticky',
        'ui.router'
    ])

    app.config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/'); // default route
    }]);

}(window.angular));
