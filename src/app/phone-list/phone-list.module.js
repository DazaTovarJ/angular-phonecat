import angular from "angular";
import { phoneListComponent } from "./phone-list.component";
import { phoneModule } from "../core/phone/phone.module";

// Define the `phoneList` module
export const phoneListModule = angular
  .module("phoneList", [phoneModule.name])
  .component("phoneList", phoneListComponent);
