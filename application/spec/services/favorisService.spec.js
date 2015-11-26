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

      spyOn($window.localStorage, 'setItem').and.callFake(function(key, value) {
        store[key] = value;
      });
    }));

    afterEach(function () {
      store = {};
    });

    it("Test if an item has been added", function () {
      var favoris = favorisService.getFavoris();
      expect(favoris).toEqual([]);

      // Add a favoris id
      favorisService.addFavoris({ id : 1 });
      var isFavoris = favorisService.isInFavoris({ id : 1 });
      expect(isFavoris).toEqual(true);

      // Add an other one and test if both are there
      favorisService.addFavoris({ id : 2 });
      favoris = favorisService.getFavoris();
      expect(favoris).toEqual([1, 2]);

      // Delete 1 and watch if it's correctly been removed.
      favorisService.deleteFavoris({ id : 1 });
      isFavoris = favorisService.isInFavoris({ id : 1 });
      expect(isFavoris).toBe(false);
    });
  });
})();