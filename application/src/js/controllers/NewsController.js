(function () {
  'use strict';

  angular.module('Queersicht.controllers')
    .controller('NewsController', newsController);

  /**
   * Manage the favoris from the localStorage
   */
  newsController.$inject = ['CommonService', 'RestCallService'];
  function newsController(CommonService, RestCallService) {
    var vm = this;

    vm.news = [];

    init();

    function init() {
      CommonService.initTitle("NEWS_TITLE");

      RestCallService.getNews().then(function (response) {
        vm.news = response.data;
      }, function (error) {
        CommonService.errorMessage('ERROR_500', false);
      });
    }
  }
})();
