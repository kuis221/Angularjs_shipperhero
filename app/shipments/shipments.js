'use strict';

var shipmentsApp = angular.module('myApp.shipments', ['ngRoute', 'ui.bootstrap']);

shipmentsApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/shipments/completed', {
    templateUrl: 'shipments/completed.html',
    controller: 'ShipmentsCtrl'
  }).when('/shipments/confirmed', {
    templateUrl: 'shipments/confirmed.html',
    controller: 'ShipmentsCtrl'
  }).when('/shipments/delivered', {
    templateUrl: 'shipments/delivered.html',
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
    $('body').on('click', '.confirmed-view-button', function() {      
      $('#confirmed-item').show();
    });

    $('body').on('click',  '.completed-view-button', function() {
      $('#completed-item').show();
    });

    $('body').on('click', '.delivered-view-button', function() {
      $('#delivered-item').show();
    });

    $('#cancel-continue-button').on('click', function() {
      $('#cancelDlg').modal('toggle');
      $('#cancelDlg').close();
    });

    $('#continue-continue-button').on('click', function() {
      $('#shipments-continueDlg').modal('toggle');
      $('#shipments-continueDlg').close();
    });

    $('#saveas-draft-button').on('click', function() {
      $('#cancelDlg').modal('toggle');
      $('#cancelDlg').close();
    });

    $('#saveas-continue-button').on('click', function() {
      $('#saveAsDraftDlg').modal('toggle');
      $('#saveAsDraftDlg').close();
    });

    $('#changesconfirm-continue-button').on('click', function() {
      $('#saveChangesConfirmDlg').modal('toggle');
      $('#saveChangesConfirmDlg').close();
    });
  });
}]);