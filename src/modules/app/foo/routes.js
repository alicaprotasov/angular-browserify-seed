'use strict';

module.exports = /*ngInject*/
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home/photos');

    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'app/foo/templates/home.html',
          controller: 'appController'
      })
        .state('home.photos', {
          url: '/photos',
          templateUrl: 'app/foo/templates/photos.html',
          controller: 'photosController'
        })
        .state('home.album', {
          url: '/album/:id',
          templateUrl: 'app/foo/templates/album.html',
          controller: 'albumController'
        })
        .state('home.photo', {
          url: '/photo/:id',
          templateUrl: 'app/foo/templates/photo.html',
          controller: 'photoController'
        });
  };