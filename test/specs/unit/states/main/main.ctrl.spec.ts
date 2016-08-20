import {expect} from 'chai';
import {moduleName} from '../../../../../app/app';
import {IMainScope} from '../../../../../app/states/main/main.ctrl';

describe('Main state', () => {
  let MainCtrl: ng.IControllerService;
  let $scope: IMainScope;

  beforeEach(angular.mock.module(moduleName));

  beforeEach(() => {
    inject(($controller, $rootScope) => {
      $scope = $rootScope.$new();

      MainCtrl = $controller('MainCtrl', {
        $scope: $scope
      });
    });
  });

  it('should define message', () => {
    expect($scope)
      .to.have.property('message')
      .that.is.equal('Media Center App');
  });
});
