export interface IMainScope extends ng.IScope {
  message: string;
}

class Main {
  public static $inject = ['$scope'];

  public constructor($scope: IMainScope) {
    $scope.message = 'Media Center App';
  }
}

export function MainCtrl(app: ng.IModule) {
  app.controller('MainCtrl', Main);
}
