'use strict';

angular.module('pTConnectApp', [
  'pTConnectApp.auth',
  'pTConnectApp.admin',
  'pTConnectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
