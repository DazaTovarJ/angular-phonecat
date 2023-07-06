import "angular";
import "angular-animate";
import "angular-resource";
import "angular-route";
import "angular-mocks";

import "./app/app.module";

const testsContext = require.context(".", true, /\.spec$/);

testsContext.keys().forEach(testsContext);
