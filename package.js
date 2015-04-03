Package.describe({
  name: 'flyandi:is',
  version: '1.0.0',
  summary: 'Is for Meteor is a small library that provides some handy methods to quickly check or validate the contents of a variable.',
  git: 'http://github.com/flyandi/meteor.is.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('is.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flyandi:is');
  api.addFiles('is.test.js');
});
