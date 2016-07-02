import './main.scss';

const template: string = require('./main.tpl.html');

export function MainStateConfig($stateProvider: ng.ui.IStateProvider) {
  $stateProvider.state('main', {
    url: '/',
    controller: 'MainCtrl',
    template: template
  });
}
