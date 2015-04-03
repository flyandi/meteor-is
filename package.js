Package.describe({
  name: 'flyandi:is',
  version: '1.0.2',
  summary: 'A tiny library that has some handy methods to quickly check or validate the contents of a variable.',
  git: 'http://github.com/flyandi/meteor-is',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('is.js');
  api.export('Is');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flyandi:is');
  api.addFiles('is.test.js');
});
