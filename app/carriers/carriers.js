'use strict';

var carriersApp = angular.module('myApp.carriers', ['ngRoute', 'ui.bootstrap']);

carriersApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/carriers/carriers', {
    templateUrl: 'carriers/carriers.html',
    controller: 'CarriersCtrl'
  }).when('/carriers/ratings', {
    templateUrl: 'carriers/ratings.html',
    controller: 'CarriersCtrl'
  }).when('/carriers/invites', {
    templateUrl: 'carriers/invites.html',
    controller: 'CarriersCtrl'
  });
}]);

carriersApp.controller('CarriersCtrl', ['$scope', '$http', function ($scope, $http) {  
  $http.get('data/carriers/carriers.json').success(function(data){
    $scope.carriers_data = data;
  });

  $http.get('data/carriers/ratings.json').success(function(data){
    $scope.ratings_data = data;
  });

  $http.get('data/carriers/invites.json').success(function(data){
    $scope.invites_data = data;
  });

  $scope.submit = function() {
    
  };

  $scope.$on('$includeContentLoaded', function (event, url) {
    $('body').on('click', '.confirmed-view-button', function() {      
      $('#confirmed-item').show();
    });

    $('#cancel-continue-button').on('click', function() {
      $('#cancelDlg').modal('toggle');
      $('#cancelDlg').close();
    });  
  });
}]);