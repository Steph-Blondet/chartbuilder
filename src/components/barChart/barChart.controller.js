(function(){
  'use strict';

  angular.module('component.barChart')
    .controller('BarChartController', BarChartController);

  function BarChartController($scope, $element) {

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

  } //--> BarChartController ends

})();
