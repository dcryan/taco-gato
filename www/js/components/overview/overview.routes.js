(function () {
  angular
    .module('taco.overview')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview/:id',
        templateUrl: 'js/components/overview/overview.tpl.html',
        controller: 'OverviewController',
        controllerAs: '$ctrl'
      });
  }
})();