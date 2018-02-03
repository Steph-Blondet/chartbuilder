(function(){
  'use strict';

  angular.module('component.radarChart')
    .controller('RadarChartController', RadarChartController);

  function RadarChartController($scope, $element) {

    var vm = this;

    vm.datasetOverride = [{
        borderWidth: .55
      },{
        borderWidth: .55
      },{
        borderWidth: .55
      },{
        borderWidth: .55
      },{
        borderWidth: .55
    }];

  } //--> RadarChartController ends
})();
