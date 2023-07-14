import { route } from 'angular';

config.$inject = ['$routeProvider'];
export function config($routeProvider: route.IRouteProvider) {
  $routeProvider
    .when('/phones', {
      template: '<phone-list></phone-list>',
    })
    .when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>',
    })
    .otherwise('/phones');
}
