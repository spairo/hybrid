/**
* @ngdoc overview
* @name ClaroMusica App
* @description ClaroMusica App
* @created By ClaroMusica App
*
* Main module of the application.
*/
'use strict';

var ClaroApp = angular.module("ClaroApp",
  [
    "ui.router",
    //"matchMedia",
    "angular-loading-bar",
    "ngAnimate",
  ]
)

ClaroApp.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('landing', {
      url: '/landing',
      controller: 'mainCtrl',
      templateUrl: 'views/landing.html',
    })
    .state('mobile', {
      url: '/mobile',
      controller: 'mainCtrl',
      templateUrl: 'views/mobile.html',
    })
    
    $urlRouterProvider.otherwise('/landing');
})
