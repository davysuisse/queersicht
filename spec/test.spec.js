/* jslint node: true */
/* global describe, it, expect */

"use strict";

describe("#multiply", function () {
  var   queersichtController,
        $rootScope;

  beforeEach(module('Queersicht'));
  beforeEach(module('Queersicht.controllers'));

  beforeEach(inject(function($controller, _$rootScope_){
    $rootScope = _$rootScope_;
    queersichtController = $controller('QueersichtController', { '$scope' : $rootScope.$new() });
  }));

  it("Test the broadcast to change the title", function () {
    $rootScope.$broadcast('menu-title', { title : 'test' });
    expect(queersichtController.navigation).toEqual('test');
  });
});