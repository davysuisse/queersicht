(function () {
  'use strict';

  describe("Test Storage Service", function () {
    var storageService;
    var store      = {};
    var favorisKey = 'favoris';

    beforeEach(module('Queersicht'));
    beforeEach(module('Queersicht.services'));

    beforeEach(inject(function ($window, StorageService) {
      storageService = StorageService;

      // LocalStorage mock.
      spyOn($window.localStorage, 'getItem').and.callFake(function (key) {
        return store[key];
      });

      spyOn($window.localStorage, 'setItem').and.callFake(function (key, value) {
        store[key] = value;
      });
    }));

    afterEach(function () {
      store = {};
    });

    it("Test if an item has been added", function () {
      var favoris = storageService.getObjectInStorage(favorisKey);
      expect(favoris).toEqual([]);

      // Add a favoris id
      storageService.addObjectInStorage(favorisKey, 1);
      var isFavoris = storageService.isObjectInStorage(favorisKey, 1);
      expect(isFavoris).toEqual(true);

      // Add an other one and test if both are there
      storageService.addObjectInStorage(favorisKey, 2);
      favoris = storageService.getObjectInStorage(favorisKey);
      expect(favoris).toEqual([1, 2]);

      // Delete 1 and watch if it's correctly been removed.
      storageService.deleteObjectInStorage(favorisKey, 1);
      isFavoris = storageService.isObjectInStorage(favorisKey, 1);
      expect(isFavoris).toBe(false);
    });
  });
})();