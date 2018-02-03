(function(){
  'use strict';

  angular.module('component.form')
    .controller('FormController', ['FileSaver', 'Blob', FormController]);

  function FormController(FileSaver, Blob) {

    var vm = this;

    // CODE THAT EXPORTS ONE OBJECT
    $.fn.serializeObject = function(){
      var object = {};
      var array = this.serializeArray();
      $.each(array, function() {
          if (object[this.name] !== undefined) {
              if (!object[this.name].push) {
                  object[this.name] = [object[this.name]];
              }
              object[this.name].push(this.value || '');
          } else {
              object[this.name] = this.value;
          }
      });
      return object;
    };

    vm.download = function(){
      console.log('vm.download clicked');

      var formData = JSON.stringify($('form').serializeObject(), undefined, 2);
      console.log(formData);

      var blob = new Blob([formData], {type: "application/json;charset=utf-8"});
      FileSaver.saveAs(blob, "chart.json");

    }

  } // -> FormController ends
})();
