'use strict';

module.exports = /*@ngInject*/
  function appController($rootScope) {
    $rootScope.loaded = false;
    
    $rootScope.$on('$stateChangeStart', function() {
      $rootScope.loaded = false;
    });
  };