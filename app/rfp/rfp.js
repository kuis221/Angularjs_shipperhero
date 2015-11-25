'use strict';

var rfpApp = angular.module('myApp.rfp', ['ngRoute']);

rfpApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/rfp/dashboard', {
    templateUrl: 'rfp/dashboard.html',
    controller: 'RfpCtrl'
  }).when('/rfp/new', {
    templateUrl: 'rfp/new.html',
    controller: 'RfpCtrl'
  });
}]);

rfpApp.controller('RfpCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('data/confirmed.json').success(function(data){
    $scope.confirmed_data = data;
  });
  $scope.current_user = 'Matt';

  $scope.submit = function() {
    
  };

  $scope.$on('$includeContentLoaded', function (event, url) {    
    $('#pickup-info').parent().addClass('active');
    $('#btn-previous').hide();
    $('#btn-next').show();

    $('.step-item').on('click', function() {
      $('.steps-unit.active').removeClass('active');
      $(this).parent().addClass('active');
      var id = $(this).attr('id');
      if (id === 'pickup-info') {
        $('#btn-previous').hide();
        $('#btn-next').show();

        $('#pickup-info-step').show();
        $('#delivery-info-step').hide();
        $('#shipment-info-step').hide();
        $('#shipment-timing-step').hide();
        $('#tracking-step').hide();
      } else if (id === 'delivery-info') {
        $('#btn-previous').show();
        $('#btn-next').show();
        
        $('#pickup-info-step').hide();
        $('#delivery-info-step').show();
        $('#shipment-info-step').hide();
        $('#shipment-timing-step').hide();
        $('#tracking-step').hide();
      } else if (id === 'shipment-timing') {
        $('#btn-previous').show();
        $('#btn-next').show();

        $('#pickup-info-step').hide();
        $('#delivery-info-step').hide();
        $('#shipment-timing-step').show();
        $('#shipment-info-step').hide();        
        $('#tracking-step').hide();
      } else if (id === 'shipment-info') {
        $('#btn-previous').show();
        $('#btn-next').show();

        $('#pickup-info-step').hide();
        $('#delivery-info-step').hide();
        $('#shipment-timing-step').hide();
        $('#shipment-info-step').show();
        $('#tracking-step').hide();
      } else if (id === 'tracking') {
        $('#btn-previous').show();
        $('#btn-next').hide();

        $('#pickup-info-step').hide();
        $('#delivery-info-step').hide();
        $('#shipment-timing-step').hide();
        $('#shipment-info-step').hide();
        $('#tracking-step').show();
      }
    });
  });  
}]);