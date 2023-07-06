import angular from "angular";
import { phoneModule } from "./phone/phone.module";

// Define the `core` module
export const coreModule = angular.module("core", [phoneModule.name]);
