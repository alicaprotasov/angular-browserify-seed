'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('appController', require('./controllers/app.controller'))
        .controller('photosController', require('./controllers/photos.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('photoController', require('./controllers/photo.controller'));
