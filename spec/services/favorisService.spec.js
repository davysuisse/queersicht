(function () {
  'use strict';

  describe("Test Favoris Service", function () {
    var favorisService;
    var store = {};

    beforeEach(module('Queersicht'));
    beforeEach(module('Queersicht.services'));

    beforeEach(inject(function ($window, FavorisService) {
      favorisService = FavorisService;

      // LocalStorage mock.
      spyOn($window.localStorage, 'getItem').and.callFake(function(key) {
        return store[key];
      });

      Object.defineProperty(sessionStorage, "setItem", { writable: true });
      spyOn($window.localStorage, 'setItem').and.callFake(function(key, value) {
        store[key] = value;
      });
    }));

    afterEach(function () {
      store = {};
    });

    it("Test if an item has been added", function () {
      favorisService.addFavoris({ id : 2 });

      var isFavoris = favorisService.isInFavoris({ id : 2 });
      expect(isFavoris).toBe(true);
    });
  });
})();