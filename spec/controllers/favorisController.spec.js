/* jslint node: true */
/* global describe, it, expect */

"use strict";

describe("Test Favoris Controller", function () {
  var favorisController;

  beforeEach(module('Queersicht'));
  beforeEach(module('Queersicht.controllers'));

  beforeEach(inject(function($controller, CommonService, $httpBackend){
    favorisController = $controller('FavorisController');
    $httpBackend.expect('GET', '/queersicht/webservice/programs/dates').respond(200, {title: 'test'});
    $httpBackend.when('GET', 'program_per_movie.html').respond('');

    $httpBackend.flush();
  }));

  it("Test if the favoris has been affected", function () {
    expect(favorisController.favoris).toEqual({title : 'test'});
  });
});