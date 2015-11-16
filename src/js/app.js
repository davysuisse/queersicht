(function() {
  'use strict';

  angular
          .module('Queersicht', ['ui.router', 'mobile-angular-ui',
              'Queersicht.controllers', 'Queersicht.services',
              'Queersicht.directives']);

  angular.module('Queersicht.services', []);
  angular.module('Queersicht.directives', []);
  angular.module('Queersicht.controllers', []);

})();