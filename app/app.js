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
    "angular-loading-bar",
    "ngAnimate",
    //"ui.bootstrap",
  ]
)

ClaroApp.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

    .state('landing', {
      url: '/landing',
      templateUrl: 'views/landing.html',
    })

    // catch all route
    $urlRouterProvider.otherwise('/landing');
})
