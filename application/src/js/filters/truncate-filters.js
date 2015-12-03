/**
 * Created by Davy Claude on 03.12.2015.
 */
(function () {
  'use strict';

  angular.module('Queersicht.filters')
    .filter('truncate', truncateFilter);

  function truncateFilter() {
    return function (value, wordWise, max, tail) {
      if (!value) return '';

      max = parseInt(max, 10);
      if (!max) return value;

      if (value.length <= max) return value;

      value = value.substr(0, max);
      if (wordWise) {
        var lastSpace = value.lastIndexOf(' ');
        if (lastSpace != -1) {
          value = value.substr(0, lastSpace);
        }
      }

      return value + (tail || ' …');
    };
  }
})();