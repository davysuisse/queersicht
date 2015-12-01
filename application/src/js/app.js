(function () {
  'use strict';

  angular.module('Queersicht', [
      'ui.router',
      'ngCookies',
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'mobile-angular-ui',
      'pascalprecht.translate',
      'Queersicht.controllers',
      'Queersicht.services',
      'Queersicht.directives',
      'Queersicht.constants'
    ]
  );

  // Create modules
  angular.module('Queersicht.services', ['ngResource']);
  angular.module('Queersicht.directives', []);
  angular.module('Queersicht.controllers', []);
  angular.module('Queersicht.constants', []);

})();