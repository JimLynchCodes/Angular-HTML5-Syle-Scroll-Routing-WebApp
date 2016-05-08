(function() {
  'use strict';

  angular
    .module('html5Scroll')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
