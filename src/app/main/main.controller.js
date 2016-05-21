(function() {
  'use strict';

  angular
    .module('html5Scroll')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, webDevTec, toastr, $anchorScroll, $location, $document) {
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1462687563988;
    vm.showToastr = showToastr;

    activate();

    vm.scrollTo = function (className) {

      var topPos = $('#' + className).position().top;
      // $log.log("scrollin! " + className + ' to ' + topPos);
      // TweenMax.scr(className);
      // TweenLite.to(window, 0.5, {scrollTo:{y:topPos, ease:Power2.easeInOut}});
      $.scrollTo($('#' + className).position().top, 1000)
      // $location.hash(className);
      // $anchorScroll.sc();
    }

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
