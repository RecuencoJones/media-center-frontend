import {expect} from 'chai';
import {moduleName} from '../../../../../app/app';
import {ICoreScope} from '../../../../../app/components/core/core.comp';

describe('Core component', () => {
  let $scope: ICoreScope;
  let element: JQuery;

  beforeEach(angular.mock.module(moduleName));

  beforeEach(() => {
    inject(($rootScope, $compile) => {
      const template = `
        <div data-core
          data-message="{{message}}">
        </div>`;

      $scope = $rootScope.$new();

      element = angular.element(template);
      $compile(element)($scope);
      $scope.$digest();
    });
  });

  it('should render the component', () => {
    expect(element).to.not.be.undefined;
  });

  it('should display test message', () => {
    $scope.message = 'test';
    $scope.$digest();

    expect(element.text().trim()).to.equal('test');
  });

  it('should display default message', () => {
    expect(element.text().trim()).to.equal('Core');
  });
});
