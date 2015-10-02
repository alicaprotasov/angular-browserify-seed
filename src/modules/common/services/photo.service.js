'use strict';

/**
 * Photo service
 * @param $http
 * @param serviceHandlers  -  handle server response
 * @param globalURLs       -  server urls
 */
module.exports = /*@ngInject*/
    function photoService($http, serviceHandlers, globalURLs) {
        return {
          getPhoto: getPhoto
        };

        /** Get photo by ID */
        function getPhoto(photoId) {
          return $http.get(globalURLs.URL.photo + photoId)
            .then(serviceHandlers.successHandler)
            .catch(serviceHandlers.errorHandler);
        }
    };
