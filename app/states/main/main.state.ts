const template: string = require('./main.tpl.html');

interface IMainScope extends ng.IScope {
  message: string;
}

class Main {
  static $inject = ['$scope'];

  constructor($scope: IMainScope) {
    $scope.message = 'Media Center App';
  }
}

export function MainCtrl(app: ng.IModule) {
  app.controller('MainCtrl', Main);
};

export function MainStateConfig($stateProvider: ng.ui.IStateProvider) {
  $stateProvider.state('main', {
    url: '/',
    controller: 'MainCtrl',
    template: template
  });
};
