'use strict';

/*
* @ngdoc function
* @name ClaroApp.controller:sliderCtrl
* @description
* # sliderCtrl
* Controller of the ClaroApp
*/

ClaroApp.controller("sliderCtrl", function($scope, screenSize){

  $scope.tablet = screenSize.on('sm', function(match){
    $scope.tablet = match;
  });

  $scope.mobile = screenSize.on('xs', function(match){
    $scope.mobile = match;
  });

  screenSize.when('sm', function(){
        console.log('tablet');
  });

  screenSize.when('xs', function(){
        console.log('mobile');
  });

  $scope.slides = [{
      id: "1",
      logo: "",
      btn_text: "trigger",
      btn_text2: "Registro 2",
      btn_block_text: "",
      btn_block_text2: "",
      trigger_1: 'foo1',
      footer_label: "",
      footer_label2: ""
    },{
      id: "2",
      logo: "",
      btn_text: "Registro 1",
      btn_text2: "Quiero Mas",
      btn_block_text: "Si eres cliente telcel, lorem ipsum dol sit amet",
      btn_block_text2: "",
      trigger_1: "foo2",
      footer_label: "*Primer semana gratis",
      footer_label2: "*testing"
   },
   {
     id: "3",
     //logo: "assets/img/logo_planos_transparent_small.png",
     logo: "",
     btn_text: "Registro 1",
     btn_text2: "Registro 2",
     btn_block_text: "lorem ipsum",
     btn_block_text2: "",
     trigger_1: "foo3",
     footer_label: "*Primer semana gratis",
     footer_label2: "testing"
  }];

   $scope.texts = [{
      id: "1",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
   },{
      id: "2",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
   },{
      id: "3",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
   },{
      id: "4",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
   },{
      id: "5",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
      line: "Lorem ipsum dol sit",
   }];

   $scope.foo1 = function(){
    alert("foo");
  };

});
