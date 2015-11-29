(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('NewsController', newsController);

  /**
   * Manage the news
   */
  newsController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function newsController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    function init() {
      CommonService.init("NEWS_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.newsService.key, QSConstants.newsService.url));
    }

    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.newsService.key, QSConstants.newsService.url));
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
