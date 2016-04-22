'use strict';
/*
* @ngdoc function
* @name ClaroApp.controller:mainCtrl
* @description
* # mainCtrl
* Controller of the ClaroApp
*/

ClaroApp.controller("mainCtrl", function($scope, screenSize){

  $scope.mobile = screenSize.is('xs');
  $scope.tablet = screenSize.is('sm');

  //ng-class="{ active: $index == 0}">ng-class="{'selected': $index == selectedIndex}"

    $scope.selectedIndex = 0;

  $scope.change = function(){

      alert($scope.active);

      console.log($scope.active);

      var last_item = $scope.myItems.length - 1;

      if($scope.selectedIndex == last_item){
        $scope.selectedIndex = 0;
      }else{
        $scope.selectedIndex += 1;
      }

  };

  /*slider content*/

  $scope.slides = [{
      id: "1",
      logo: "assets/img/01_cm_claro_xhdpi.png",
      title: "",
      logo_title: "assets/img/claro_hdpi.png",
      btn_text: "Inicia sesión",
      btn_text2: "Escucha gratis",
      btn_block_text: "Si eres cliente Telcel con abono, tienes 3 meses gratis! Click aqui >>",
      btn_block_text2: "Rédime tu codigo promocional aquí",
      btn_block_url: "login_android()",
      btn_block_url2: "",
      trigger_1: "",
      trigger_2: "",
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
      logo: "assets/img/cm_gratuito_hdpi.png",
      title: "",
      logo_title: "",
      btn_text: "Escucha ahora",
      btn_text2: "Quiero más",
      btn_block_text: "",
      btn_block_text2: "",
      btn_block_url: "",
      btn_block_url2: "",
      trigger_1: "",
      trigger_2: "",
      sub_icon: "",
      sublabel: "",
      sublabel_link: "",
      ul_text: "Mejores Playlist por generos",
      ul_text2: "Escucha tus 10 favoritas",
      ul_text3: "Reproduce sin conexion a internet",
      ul_text4: "Nuevas Playlist todas las semanas",
      ul_text5: "Playlist con las ultimas novedades",
      ios_path: "callLoginUnique",
      ios_path2: "",
      footer_label: "",
      footer_label2: ""
   },
   {
     id: "3",
     logo: "assets/img/cm_charts_hdpi.png",
     title: "",
     logo_title: "",
     btn_text: "Escucha ahora",
     btn_text2: "Quiero más",
     btn_block_text: "",
     btn_block_text2: "",
     btn_block_url: "",
     btn_block_url2: "",
     trigger_1: "",
     trigger_2: "",
     sub_icon: "",
     sublabel: "No gracias",
     sublabel_link: " escuchar gratis ahora",
     ul_text: "Toda la musica, millones de canciones",
     ul_text2: "Tu musica sin conexion a internet",
     ul_text3: "Novedades y lanzamientos",
     ul_text4: "Crea y comparte playlist con tus amigos",
     ul_text5: "Estaciones de radio de todo el mundo",
     ios_path: "callLoginUnique",
     ios_path2: "",
     footer_label: "*Primer semana gratis",
     footer_label2: ""
  },{
    id: "4",
    logo: "assets/img/cm_ilimitado_hdpi.png",
    title: "",
    btn_text: "Escucha ahora",
    btn_text2: "Quiero más",
    btn_block_text: "Si eres cliente telcel con tu abono, tienes 3 meses gratis! Click aqui >>",
    btn_block_text2: "",
    btn_block_url: "",
    btn_block_url2: "",
    trigger_1: "foo3",
    sub_icon: "",
    sublabel: "No gracias",
    sublabel_link: " escuchar gratis ahora",
    ul_text: "Toda la musica, millones de canciones",
    ul_text2: "Tu musica sin conexion a internet",
    ul_text3: "Novedades y lanzamientos",
    ul_text4: "Crea y comparte playlist con tus amigos",
    ul_text5: "Estaciones de radio de todo el mundo",
    ios_path: "callLoginUnique",
    ios_path2: "",
    footer_label: "*Primer semana gratis",
    footer_label2: "*Primer mes gratis"
 }];

   //swipe apps

   $scope.swipeL = function(){
     alert("swipe left test");
   };

   $scope.swipeR = function(){
     alert("swipe right test");
   };

   $scope.login_android = function(){
      alert("login_android");
      //Android.redirect();
   };

  $scope.someFunction = function() {
      alert("left");
  };

});
