'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'pages/home',
      bodyClass: 'homepage'
    }).
    when('/article', {
      templateUrl: 'pages/article',
      bodyClass: 'article'
    }).
    when('/article/:articleId', {
      templateUrl: 'pages/article',
      bodyClass: 'single-article',
      controller: 'AppCtrl'
    }).
    when('/category', {
      redirectTo: '/'
    }).
    when('/category/:categoryId', {
      templateUrl: 'pages/category',
      bodyClass: 'category'
    }).
    when('/empty', {
      templateUrl: 'pages/empty',
      bodyClass: 'empty-page'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
