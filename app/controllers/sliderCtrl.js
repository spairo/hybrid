'use strict';

/*
* @ngdoc function
* @name ClaroApp.controller:sliderCtrl
* @description
* # sliderCtrl
* Controller of the ClaroApp
*/

ClaroApp.controller("sliderCtrl", function($scope){

  $scope.event = {
        prizes: [{
            name: "name",
            description: "description"
        }, {
            name: "name2",
            description: "description2"
        }, {
            name: "name3",
            description: "description3"
        }, {
            name: "name4",
            description: "description4"
        }]
  };
  /*
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
  */
  $scope.bar = "foobar";

  $scope.slides = [{
      id: "1",
      logo: "assets/img/logo_claromusica_inicio_small.png",
      btn_text: "trigger 1",
      btn_text2: "trigger 2",
      btn_block_text: "",
      btn_block_text2: "",
      trigger_1: "foo1",
      sublabel: "",
      footer_label: "",
      footer_label2: ""
    },{
      id: "2",
      logo: "assets/img/logo_charts_transparent_small.png",
      btn_text: "Registro 1",
      btn_text2: "Quiero Mas 2",
      btn_block_text: "Si eres cliente telcel, lorem ipsum dol sit amet , ",
      btn_block_text2: "Si eres cliente telcel, lorem ipsum dol sit amet Si eres cliente telcel, lorem ipsum dol sit amet",
      trigger_1: "foo2",
      sublabel: "No gracias, escuchar ahora",
      footer_label: "*Primer semana gratis",
      footer_label2: "*testing"
   },
   {
     id: "3",
     logo: "assets/img/logo_planos_transparent_small.png",
     btn_text: "Registros| 1",
     btn_text2: "Registros 2",
     btn_block_text: "lorem ipsum",
     btn_block_text2: "",
     trigger_1: "foo3",
     sublabel: "No gracias, escuchar ahora",
     footer_label: "*Primer semana gratis",
     footer_label2: "testing"
  }];

   $scope.texts = [{
      id: "1",
      line: "asLorem ipsum dol sit",
      line: "sLorem ipsum dol sit",
      line: " sLorem ipsum dol sit",
      line: "s Lorem ipsum dol sit",
      line: "as Lorem ipsum dol sit",
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
