'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http, $route, $filter, $location) {
    $scope.$route = $route;

    $http({
      method: 'GET',
      url: '/api/articles'
    }).
    success(function (data, status, headers, config) {
      $scope.articles = data.data['List of articles'];
      $scope.categories = data.data['List of categories'];

      // Navigation
      $scope.nav = {
        links: []
      };
      $scope.categories.forEach(function(element, index) {
        $scope.nav.links.push({
          url: 'category/' + element.Id,
          name: element.Name,
          id: element.Id
        });
      });

      // Article list
      $scope.articles.forEach(function(element, index) {
        $scope.articles[index].url = 'article/' + element.Id
        $scope.articles[index].category_id = element['Category Id'];
      });

      $scope.getArticle = $filter('getByProperty')('Id', $route.current.params['articleId'], $scope.articles);

      // console.log('Received Articles JSON data: ', $scope);
    }).
    error(function (data, status, headers, config) {
      console.error('Unable to get articles JSON data');
      // $location.path('error');
    });

  });
