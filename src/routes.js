export default routes;

/** @ngInject */
function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: '/',
        component: 'homeComponent',
        params: {
            done: {
                'br': false,
                'jp': false,
                'france': false
            }
        }
    }).state('activities', {
        url: '/activities',
        component: 'activitiesComponent',
        params: {
            type: undefined,
            dones: {
                'br': false,
                'jp': false,
                'france': false
            }
        },
        onEnter: ($state, $stateParams) => {
            if (!$stateParams.type) return $state.transitionTo('home');
        }
    })
}
