import {MainStateConfig} from '../states/main/main.state';

const states = [
  MainStateConfig
];

class Routes {
  static $inject = ['$stateProvider', '$urlRouterProvider'];

  constructor($stateProvider: ng.ui.IStateProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    states.forEach((state: Function) => {
      state($stateProvider);
    });

    $urlRouterProvider.otherwise('/');
  }
}

export function RoutesConfig(app: ng.IModule) {
  app.config(Routes);
}
