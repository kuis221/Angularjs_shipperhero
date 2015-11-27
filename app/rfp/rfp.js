'use strict';

var rfpApp = angular.module('myApp.rfp', ['ngRoute', 'ui.bootstrap']);

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
  $http.get('data/rfp/confirmed.json').success(function(data){
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
  
  /*
    ****************************************
    Date Picker
    ****************************************
  */
  $scope.today = function() {
    $scope.pickup_date = new Date();
    $scope.delivery_date = new Date();
  };

  $scope.today();

  /*$scope.clear = function () {
    $scope.dt = null;    
  };

  Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };*/

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.pickupdate_open = function($event) {
    $scope.status.pickupdate_opened = true;
  };

  $scope.deliverydate_open = function($event) {
    $scope.status.deliverydate_opened = true;
  };

  /*$scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };*/

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];

  $scope.status = {
    pickupdate_opened: false,
    deliverydate_opened: false
  };

  /* var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }
    return '';
  };*/

  // $scope.mytime = new Date();
  $scope.ismeridian = true;

  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };
  });
}]);