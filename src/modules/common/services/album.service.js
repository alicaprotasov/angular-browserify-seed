'use strict';

/**
 * Album service
 * @param $http
 * @param serviceHandlers  -  handle server response
 * @param globalURLs       -  server urls
 */
module.exports = /*@ngInject*/
  function albumService($http, serviceHandlers, globalURLs) {
    return {
      getPhotos: getPhotos
    };

    /** Get photos by album ID */
    function getPhotos(albumId) {
      return $http.get(globalURLs.URL.albumPhotos + albumId + '/photos')
        .then(serviceHandlers.successHandler)
        .catch(serviceHandlers.errorHandler);
    }
  };
