import angular from "angular";
import { phoneModule } from "../core/phone/phone.module";
import { phoneDetailComponent } from "./phone-detail.component";

// Define the `phoneDetail` module
export const phoneDetailModule = angular
  .module("phoneDetail", ["ngRoute", phoneModule.name])
  .component("phoneDetail", phoneDetailComponent);
