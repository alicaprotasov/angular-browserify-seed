'use strict';

/**
 * Photo controller
 * @param {integer} id   - photo id
 */
module.exports = /*@ngInject*/
  function photoController($rootScope, $scope, $state, photoService) {
    $scope.photo = {};
    $scope.photoId = $state.params.id;
    
    /** Init photo */        
    photoService.getPhoto($scope.photoId).then(function(data) {
      $scope.photo = data;
      $rootScope.loaded = true;
    });
  };