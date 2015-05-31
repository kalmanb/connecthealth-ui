'use strict';

import MainCtrl from '../app/components/main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';


function dashCase(str) {
    return str.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}
function componentLoaderConfig($componentLoaderProvider) {
    // Load components from scr/app/components instead of ./components
    $componentLoaderProvider.setTemplateMapping(function (name) {
        var dashName = dashCase(name);
        // customized to use app prefix
        return './app/components/' + dashName + '/' + dashName + '.html';
    });
    // Use NameCtrl instead of NameController
    $componentLoaderProvider.setCtrlNameMapping(function (name) {
        return name[0].toUpperCase() + name.substr(1) + 'Ctrl';
    });
}

function AppCtrl($router) {
    $router.config([
        { path: '/', component: 'main' },
    ]);
}

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ngNewRouter', 'ngMaterial' ])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('AppCtrl', ['$router', AppCtrl])
  .config(componentLoaderConfig);


