(function () {
  'use strict';

  angular.module('Queersicht', [
      'ui.router',
      'ngCookies',
      'mobile-angular-ui',
      'ui.bootstrap',
      'Queersicht.constants',
      'pascalprecht.translate',
      'Queersicht.controllers',
      'Queersicht.services',
      'Queersicht.directives',
      'Queersicht.filters'
    ]
  );

  // Create modules
  angular.module('Queersicht.constants', []);
  angular.module('Queersicht.directives', []);
  angular.module('Queersicht.controllers', []);
  angular.module('Queersicht.filters', []);
  angular.module('Queersicht.services', ['ngResource']);

})();