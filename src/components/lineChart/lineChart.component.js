(function(){
  'use strict';

  angular.module('component.lineChart')
    .component('lineChartComponent', {
      bindings: {
        data: '<',
        optionsLineChart: '<?',
        series: '<',
        labels: '<',
        title: '<',
        colors: '<'
      },
      controllerAs:'vm',
      controller: 'LineChartController',
      templateUrl: 'src/components/lineChart/lineChart.html',
    });
})();
