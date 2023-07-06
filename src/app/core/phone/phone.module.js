import angular from "angular";
import { Phone } from "./phone.service";

// Define the `core.phone` module
export const phoneModule = angular
  .module("core.phone", ["ngResource"])
  .factory("Phone", Phone);
