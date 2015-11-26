(function () {
  'use strict';

  describe("Test Queersicht Controller", function () {
    var queersichtController, $rootScope, qsConstant;

    beforeEach(module('Queersicht'));

    beforeEach(inject(function ($injector, $controller, _$rootScope_) {
      $rootScope = _$rootScope_;
      qsConstant = $injector.get('QSConstants');

      queersichtController = $controller('QueersichtController', {
        '$scope' : $rootScope.$new()
      });
    }));

    it("Test the broadcast to change the title", function () {
      $rootScope.$broadcast(qsConstant.broadCastTitle, {
        title : 'test'
      });

      // When broadcasting, the navigation should have been affected
      expect(queersichtController.navigation).toEqual('test');
    });
  });
})();