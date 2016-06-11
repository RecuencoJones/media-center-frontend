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
