import "jquery";
import angular from "angular";
import "angular-animate";
import "angular-resource";
import "angular-route";

import { appModule } from "./app/app.module";

import "bootstrap/dist/css/bootstrap.css";

angular.bootstrap(document.documentElement, [appModule.name]);
