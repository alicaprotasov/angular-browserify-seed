'use strict';

/**
 * Service handles
 * @param $log     -  for errors loggin
 */
module.exports = /*@ngInject*/
  function serviceHandlers($log) {
    return {
      successHandler: successHandler,
      errorHandler: errorHandler
    };

    /** On success server response */
    function successHandler(response) {
      return response.data;
    }

    /** On failed server response */
    function errorHandler(error) {
      $log.debug('Service error. Error: ', error);
    }
  };
