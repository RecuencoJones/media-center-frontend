import {MainStateConfig} from '../states/main/main.state';

const states = [
  MainStateConfig
];

class Routes {
  public static $inject = ['$stateProvider', '$urlRouterProvider'];

  public constructor($stateProvider: ng.ui.IStateProvider,
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
