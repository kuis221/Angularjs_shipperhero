'use strict';

var shipmentsApp = angular.module('myApp.shipments', ['ngRoute', 'ui.bootstrap']);

shipmentsApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/shipments/completed', {
    templateUrl: 'shipments/completed.html',
    controller: 'ShipmentsCtrl'
  }).when('/shipments/confirmed', {
    templateUrl: 'shipments/confirmed.html',
    controller: 'ShipmentsCtrl'
  });
}]);

shipmentsApp.controller('ShipmentsCtrl', ['$scope', '$http', function ($scope, $http) {  
  $http.get('data/shipments/completed.json').success(function(data){
    $scope.completed_data = data;
  });
  
  $http.get('data/shipments/confirmed.json').success(function(data){
    $scope.confirmed_data = data;
  });

  $scope.submit = function() {
    
  };

  $scope.$on('$includeContentLoaded', function (event, url) {
    $('#cancel-continue-button').on('click', function() {
      $('#cancelDlg').modal('toggle');
    });

    $('#continue-continue-button').on('click', function() {
      $('#shipments-continueDlg').modal('toggle');
    });

    $('#saveas-draft-button').on('click', function() {
      $('#cancelDlg').modal('toggle');
    });

    $('#saveas-continue-button').on('click', function() {
      $('#saveAsDraftDlg').modal('toggle');
    });

    $('#changesconfirm-continue-button').on('click', function() {
      $('#saveChangesConfirmDlg').modal('toggle');
    });
  });
}]);