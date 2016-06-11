import {RoutesConfig} from './config/routes.config';
import {CoreComponent} from './components/core/core.directive';
import {MainCtrl} from './states/main/main.state';

const modules = [
  RoutesConfig,
  CoreComponent,
  MainCtrl
];

const app = angular.module('media-center-frontend', ['ui.router']);

modules.forEach((module: Function) => {
  module(app);
});

