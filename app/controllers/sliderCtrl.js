'use strict';

/*
* @ngdoc function
* @name ClaroApp.controller:sliderCtrl
* @description
* # sliderCtrl
* Controller of the ClaroApp
*/

ClaroApp.controller("sliderCtrl", function($scope){

  $scope.slides = [{
      id: "1",
      title: "test",
      subtitle: "test test",
      info: "test test test",
      text1: "Registro 1",
      text2: "Registro 2",
      labe1: "testing",
      label2: "testing"
    },{
      id: "2",
      title: "test 2",
      subtitle: "test 2 test 2",
      info: "test 2 test  2 test 2",
      text1: "Registro 1",
      text2: "Registro 2",
      labe1: "testing",
      label2: "testing"
   }];

});
