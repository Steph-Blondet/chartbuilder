(function(){
  'use strict';

  angular.module('component.lineChart')
    .controller('LineChartController', ['$scope', '$compile', 'FileSaver', 'Blob', LineChartController]);

  function LineChartController($scope, $element, FileSaver, Blob) {

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

  } //--> LineChartController ends
})();
