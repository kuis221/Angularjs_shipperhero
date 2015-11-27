'use strict';

describe('myApp.shipments module', function() {

  beforeEach(module('myApp.shipments'));

  describe('shipments controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var rfpCtrl = $controller('ShipmentsCtrl');
      expect(rfpCtrl).toBeDefined();
    }));
  });
});