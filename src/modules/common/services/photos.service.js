'use strict';

/**
 * Photos service
 * @param $http
 * @param serviceHandlers  -  handle server response
 * @param globalURLs       -  server urls
 */
module.exports = /*@ngInject*/
    function photosService($http, serviceHandlers, globalURLs) {
        return {
          getPhotos: getPhotos
        };

        /** Get all photos */
        function getPhotos() {
          return $http.get(globalURLs.URL.photos)
            .then(serviceHandlers.successHandler)
            .catch(serviceHandlers.errorHandler);
        }
    };
