(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('NewsController', newsController);

  /**
   * Manage the news
   */
  newsController.$inject = ['CommonService', 'RestCallService', 'QSCStates'];
  function newsController(CommonService, RestCallService, QSCStates) {
    var vm = this;

    vm.news = [];
    vm.init = init;

    init();

    function init() {
      CommonService.initTitle("NEWS_TITLE");

      RestCallService.getNews().then(function (response) {
        vm.news = response.data;
      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateNews);
      });
    }
  }
})();
