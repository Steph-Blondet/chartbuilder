(function(){
  'use strict';

  angular.module('component.radarChart')
    .component('radarChartComponent', {
      bindings: {
        data: '<',
        optionsRadarChart: '<?',
        series: '<',
        labels: '<',
        title: '<',
        colors: '<'
      },
      controller: 'RadarChartController',
      controllerAs: 'vm',
      templateUrl: 'src/components/radarChart/radarChart.html'
    });
})();
