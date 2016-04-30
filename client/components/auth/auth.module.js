'use strict';

angular.module('pTConnectApp.auth', [
  'pTConnectApp.constants',
  'pTConnectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
