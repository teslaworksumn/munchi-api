var MunchiApp = angular.module('Munchi', ['ngRoute']);

MunchiApp.config(function ($routeProvider) {
    $routeProvider
         .when('/', {
             templateUrl: 'views/home.html',
             controller: 'MainCtrlr'
         });

});