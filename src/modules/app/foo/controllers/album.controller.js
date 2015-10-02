'use strict';

/**
 * Album controller
 * @param {integer} id   - album id
 */
module.exports = /*@ngInject*/
  function albumController($rootScope, $scope, $state, albumService) {
    $scope.photos = [];
    $scope.albumNumber = $state.params.id;
    $scope.showImage = showImage;
    
    /** Init photos */        
    albumService.getPhotos($scope.albumNumber).then(function(data) {
      $scope.photos = data;
      $rootScope.loaded = true;
    });

    function showImage(imageId) {
      $state.go('home.photo', {id: imageId});
    }
  };