(function () {
  'use strict';

  angular.module('Queersicht', [
      'ui.router',
      'ngCookies',
      'mobile-angular-ui',
      'pascalprecht.translate',
      'Queersicht.controllers',
      'Queersicht.services',
      'Queersicht.directives',
      'Queersicht.constants'
    ]
  );

  angular.module('Queersicht.services', []);
  angular.module('Queersicht.directives', []);
  angular.module('Queersicht.controllers', []);
  angular.module('Queersicht.constants', []);

})();