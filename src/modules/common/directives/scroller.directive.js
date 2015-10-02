'use strict';

/**
 * Scroller directive
 * @param {integer} limit    limit of photo cards
 */
module.exports = /*@ngInject*/
  function scrollerDirective($window, $document, $timeout) {
      return {
        restrict: 'A',
        scope: {
          limit: '='
        },
        link: link
      };

      function link(scope, element, attrs) {
        /** Infinite scroll */
        angular.element($window).bind("scroll", function() {
          var currentView = this.scrollY + this.innerHeight;
          var documentHeight = angular.element($document)[0].body.scrollHeight;

          /** If user has scrolled to document bottom - get next 10 cards */
          if (currentView > (documentHeight - 500)) {
            scope.limit += 10;            
            scope.$apply();
          }
        });
      }
  };
