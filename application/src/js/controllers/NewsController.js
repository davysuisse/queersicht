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

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("NEWS_TITLE", vm.refresh);
      loadDatas(RestCallService.getNews());
    }

    function refresh() {
      loadDatas(RestCallService.getNews());
    }

    function loadDatas(promise) {
      promise.then(function (response) {
        vm.news = response.data;
      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateNews);
      });
    }
  }
})();
