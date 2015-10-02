'use strict';

module.exports = /*@ngInject*/
  function photosController($rootScope, $scope, $state, photosService) {
    $scope.photos = [];
    $scope.limit = 10;
    $scope.goToAlbum = goToAlbum;
    $scope.showImage = showImage;
    
    /** Init photos */        
    photosService.getPhotos().then(function(data) {
      $scope.photos = data;
      $rootScope.loaded = true;
    });

    function goToAlbum(albumId) {
      $state.go('home.album', {id: albumId});
    }

    function showImage(imageId) {
      $state.go('home.photo', {id: imageId});
    }
  };