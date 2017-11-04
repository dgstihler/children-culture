export default routes;

/** @ngInject */
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: '/',
        component: 'homePage'
    })
}
