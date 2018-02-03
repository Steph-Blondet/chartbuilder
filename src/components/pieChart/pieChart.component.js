(function(){
  'use strict';

  angular.module('component.pieChart')
    .component('pieChartComponent', {
      bindings: {
        data: '<',
        optionsPieChart: '<?',
        series: '<',
        labels: '<',
        title: '<',
        colors: '<'
      },
      controller: 'PieChartController',
      controllerAs:'vm',
      templateUrl:'src/components/pieChart/pieChart.html'
    });
})();
