import angular from "angular";

import { config } from "./app.config";
import { phoneAnimationFactory } from "./app.animations";
import { coreModule } from "./core/core.module";
import { phoneDetailModule } from "./phone-detail/phone-detail.module";
import { phoneListModule } from "./phone-list/phone-list.module";

// Define the `phonecatApp` module
export const appModule = angular
  .module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    coreModule.name,
    phoneDetailModule.name,
    phoneListModule.name,
  ])
  .config(config)
  .animation(".phone", phoneAnimationFactory);
