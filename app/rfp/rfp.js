'use strict';

var rfpApp = angular.module('myApp.rfp', ['ngRoute']);

rfpApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rfp/dashboard', {
    templateUrl: 'rfp/dashboard.html',
    controller: 'RfpCtrl'
  }).when('/rfp/new', {
    templateUrl: 'rfp/new.html',
    controller: 'RfpCtrl'
  });
}]);

rfpApp.controller('RfpCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('data/confirmed.json').success(function(data){
    $scope.confirmed_data = data;
  });
  $scope.current_user = 'Matt';

  $scope.submit = function() {
    
  };
}]);

