(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('NewsController', newsController);

  newsController.$inject = ['CommonService', 'RestCallService', 'QSCStates', 'QSConstants'];
  function newsController(CommonService, RestCallService, QSCStates, QSConstants) {
    var vm = this;

    vm.refresh = refresh;

    init();

    /**
     * @private
     * Initialize the page by loading the news
     */
    function init() {
      CommonService.init("NEWS_TITLE", vm.refresh);
      loadDatas(RestCallService.callService(QSConstants.newsService));
    }

    /**
     * @public
     * This function will be used when an error occurs
     */
    function refresh() {
      loadDatas(RestCallService.forceService(QSConstants.newsService));
    }

    /**
     * @private
     * A promise is passed in the function
     * The response is a list of news
     * @param promise
     */
    function loadDatas(promise) {
      promise.then(function (response) {
        vm.news = response.data;
      }, function (error) {
        CommonService.errorMessage('ERROR_500', QSCStates.stateNews);
      });
    }
  }
})();
