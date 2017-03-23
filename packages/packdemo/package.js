Package.describe({
  name: '51chat:packdemo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('packdemo.js');
  // api.addFiles('packdemo.js', 'client');
  api.addFiles('packdemoserver.js', 'server');

  if (api.export){
    api.export('TestPack');
  }
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('51chat:packdemo');
  api.mainModule('packdemo-tests.js');
});

Npm.depends({
    "colors": "0.6.2"
});
