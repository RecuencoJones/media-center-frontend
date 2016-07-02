import {RoutesConfig} from './config/routes.config';
import {CoreComponent} from './components/core/core.comp';
import {MainCtrl} from './states/main/main.ctrl';

const modules = [
  RoutesConfig,
  CoreComponent,
  MainCtrl
];

export const moduleName = 'media-center-frontend';

const app = angular.module(moduleName, ['ui.router']);

modules.forEach((module: Function) => {
  module(app);
});
