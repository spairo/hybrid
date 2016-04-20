'use strict';

/*
* @ngdoc function
* @name ClaroApp.controller:mainCtrl
* @description
* # mainCtrl
* Controller of the ClaroApp
*/

ClaroApp.controller("mainCtrl", function($scope){

  /*slider content*/

  $scope.slides = [{
      id: "1",
      logo: "assets/img/logo_claromusica_inicio_small.png",
      btn_text: "trigger 1",
      btn_text2: "trigger 2",
      btn_block_text: "",
      btn_block_text2: "",
      btn_block_url: "",
      btn_block_url2: "",
      trigger_1: "foo1",
      sublabel: "",
      ul_text: "Facil y sin registro!",
      ul_text2: "Tus estaciones de radio favoritas",
      ul_text3: "Reconoce lo que esta sonando",
      ul_text4: "Generos y Artistas top",
      ul_text5: "Playlist con ultimas novedades",
      ios_path: "callLoginUnique",
      ios_path2: "",
      footer_label: "",
      footer_label2: ""
    },
    {
      id: "2",
      logo: "assets/img/logo_charts_transparent_small.png",
      btn_text: "Registro 1",
      btn_text2: "Quiero Mas 2",
      btn_block_text: "Si eres cliente telcel, lorem ipsum dol sit amet , ",
      btn_block_text2: "Si eres cliente telcel, lorem ipsum dol sit amet , ",
      btn_block_url: "",
      btn_block_url2: "",
      trigger_1: "foo2",
      sublabel: "No gracias, escuchar ahora",
      ul_text: "Mejores Playlist por generos",
      ul_text2: "Escucha tus 10 favoritas",
      ul_text3: "Reproduce sin conexion a internet",
      ul_text4: "Nuevas Playlist todas las semanas",
      ul_text5: "",
      ios_path: "callLoginUnique",
      ios_path2: "",
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
     btn_block_url: "",
     btn_block_url2: "",
     trigger_1: "foo3",
     sublabel: "No gracias, escuchar ahora",
     ul_text: "Toda la musica, millones de canciones",
     ul_text2: "Tu musica sin conexion a internet",
     ul_text3: "Novedades y lanzamientos",
     ul_text4: "Crea y comparte playlist con tus amigos",
     ul_text5: "Estaciones de radio de todo el mundo",
     ios_path: "callLoginUnique",
     ios_path2: "",
     footer_label: "*Primer semana gratis",
     footer_label2: "testing"
  },{
    id: "4",
    logo: "assets/img/logo_planos_transparent_small.png",
    btn_text: "Registros| 1",
    btn_text2: "Registros 2",
    btn_block_text: "Si eres cliente telcel con tu abono, tienes 3 meses gratis! Click aqui >>",
    btn_block_text2: "Rédime tu codigo promocional aquí",
    btn_block_url: "",
    btn_block_url2: "",
    trigger_1: "foo3",
    sublabel: "No gracias, escuchar ahora",
    ul_text: "Toda la musica, millones de canciones",
    ul_text2: "Tu musica sin conexion a internet",
    ul_text3: "Novedades y lanzamientos",
    ul_text4: "Crea y comparte playlist con tus amigos",
    ul_text5: "Estaciones de radio de todo el mundo",
    ios_path: "callLoginUnique",
    ios_path2: "",
    footer_label: "*Primer semana gratis",
    footer_label2: "testing"
 }];

   $scope.foo = function(){
      //alert("foo");
      Android.redirect();
   };

});
