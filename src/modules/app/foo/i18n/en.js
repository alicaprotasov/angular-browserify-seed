'use strict';

module.exports = /*ngInject*/
    function ($translateProvider) {
        $translateProvider.translations('en', {
            HELLO: 'Hello {{value}}'
        });

        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('en');
    };