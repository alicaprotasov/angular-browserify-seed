'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('scroller', require('./scroller.directive'));
