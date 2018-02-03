(function(){
  'use strict';

  angular.module('component.form')
    .component('formComponent', {
      bindings: {
        data: '<',
        options: '<?',
        labels: '<',
        title: '<',
        callback: '&'
      },
      controllerAs:'vm',
      controller: 'FormController',
      templateUrl: 'src/components/form/form.html',
    });
})();
