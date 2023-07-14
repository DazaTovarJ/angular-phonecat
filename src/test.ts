import 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';
import 'angular-mocks';

import './app/app.module';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

const testsContext = require.context('.', true, /\.spec$/);

testsContext.keys().forEach(testsContext);
