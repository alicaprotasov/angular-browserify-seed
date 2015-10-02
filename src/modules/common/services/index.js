'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .constant('globalURLs', {
          'URL' : {
            'photos': 'http://jsonplaceholder.typicode.com/photos',
            'albumPhotos': 'http://jsonplaceholder.typicode.com/albums/',
            'photo': 'http://jsonplaceholder.typicode.com/photos/'
          }
        })
        .factory('serviceHandlers', require('./handlers.service'))
        .factory('photosService', require('./photos.service'))
        .factory('albumService', require('./album.service'))
        .factory('photoService', require('./photo.service'));
