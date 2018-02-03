(function(){
  'use strict';

  angular.module('component.barChart')
    .component('barChartComponent', {
      bindings: {
        data: '<',
        optionsBarChart: '<?',
        series: '<',
        labels: '<',
        title: '<',
        colors: '<'
      },
      controller: 'BarChartController',
      controllerAs: 'vm',
      templateUrl: 'src/components/barChart/barChart.html'
    });
})();
