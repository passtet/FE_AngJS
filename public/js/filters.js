'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }).
  filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  }).
  filter('getByProperty', function() {
  return function(propertyName, propertyValue, collection) {
    var i=0, len=collection.length;
    for (; i<len; i++) {
      if (collection[i][propertyName] == +propertyValue) {
        return collection[i];
      }
    }
    return null;
  }
  });
