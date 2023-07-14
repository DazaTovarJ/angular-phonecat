import * as angular from 'angular';
import { phoneModule } from './phone/phone.module';
import { checkmark } from './checkmark/checkmark.filter';

// Define the `core` module
export const coreModule = angular
  .module('core', [phoneModule.name])
  .filter('checkmark', checkmark);
