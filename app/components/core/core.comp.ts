import './core.scss';

const template: string = require('./core.tpl.html');

interface ICoreScope extends ng.IScope {
  message: string;
}

function CoreDirective(): ng.IDirective {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      message: '@'
    },
    template: template,
    link: (scope: ICoreScope) => {}
  };
}

export function CoreComponent(app: ng.IModule) {
  app.directive('core', CoreDirective);
};
