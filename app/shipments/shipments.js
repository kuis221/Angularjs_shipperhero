'use strict';

var shipmentsApp = angular.module('myApp.shipments', ['ngRoute', 'ui.bootstrap']);

shipmentsApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/shipments/completed', {
    templateUrl: 'shipments/completed.html',
    controller: 'ShipmentsCtrl'
  });
}]);

shipmentsApp.controller('ShipmentsCtrl', ['$scope', '$http', function ($scope, $http) {  
  $http.get('data/shipments/completed.json').success(function(data){
    $scope.completed_data = data;
  });
  
  $scope.submit = function() {
    
  };  
}]);