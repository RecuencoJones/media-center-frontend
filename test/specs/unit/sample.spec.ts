import SinonSandbox = Sinon.SinonSandbox;
import {expect} from 'chai';
import {moduleName} from '../../../app/app';
import {IMainScope} from '../../../app/states/main/main.ctrl'

const chai: Chai.ChaiStatic = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('App test', () => {
  let MainCtrl: ng.IControllerService;
  let $scope: IMainScope;

  beforeEach(angular.mock.module(moduleName));

  beforeEach(() => {
    inject((_$controller_, _$rootScope_) => {
      $scope = _$rootScope_.$new();

      MainCtrl = _$controller_('MainCtrl', {
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
