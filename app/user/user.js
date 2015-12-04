'use strict';

var userApp = angular.module('myApp.user', ['ngRoute'])

userApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'user/index.html',
    controller: 'UserCtrl'
  }).when('/user/myprofile', {
  	templateUrl: 'user/myprofile.html',
  	controller: 'UserCtrl'
  }).when('/user/sign_up', {
  	templateUrl: 'user/sign_up.html',
  	controller: 'UserCtrl'
  });
}]);

userApp.controller('UserCtrl', [function() {

}]);