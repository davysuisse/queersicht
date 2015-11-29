(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('QueersichtController', queersichtController);

  /**
   * The Queersicht Controller [MainController]
   */
  queersichtController.$inject = [
    '$scope', 'QSConstants', 'TranslationService', 'SettingsService', 'RestCallService', '$injector', 'CommonService'
  ];
  function queersichtController($scope, QSConstants, TranslationService, SettingsService, RestCallService, $injector, CommonService) {
    var vm = this;

    vm.settings    = SettingsService;
    vm.loadProgram = loadProgram;

    init();

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.broadCastTitle, function (event, args) {
      vm.navigation = args.title;
    });

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.loadingSpinner, function (event, args) {
      vm.loading = args.loading;
    });

    // Listen to a broadcast and apply the title
    $scope.$on(QSConstants.errorMessage, function (event, args) {
      vm.errorMessage = args.error;
      console.log('dsa');
    });

    // Applying null, will set the actual language
    function init() {
      TranslationService.setLanguage(null);
    }

    function loadProgram() {
      RestCallService.callProgram().then(function (response) {
        $injector.get('$state').reload();
      }, function (error) {
        CommonService.errorMessage('ERROR_500');
      });
    }
  }
})();