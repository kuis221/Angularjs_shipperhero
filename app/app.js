'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.rfp',
  'myApp.user',
  'myApp.shipments',
  'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
  	redirectTo: '/'
  });
}]);