Package.describe({
  name: 'rcdelfin:bert',
  version: '2.1.2',
  summary: 'A client side, multi-style alerts system for Meteor.',
  git: 'https://github.com/rcdelfin/bert.git',
  documentation: 'README.md'
});

Package.onUse( function( api ) {
  api.versionsFrom( '1.3.5.1' );

  api.use([
    'ecmascript',
    'templating',
    'session',
    'jquery',
    'fourseven:scss@3.8.0',
    'fortawesome:fontawesome@4.4.0'
  ], 'client');

  api.addFiles([
    'templates/bert-alert.html',
    'templates/bert-alert.js',
    'templates/body.html',
    'stylesheets/colors.scss',
    'stylesheets/flexbox.scss',
    'stylesheets/bert.scss',
    'bert.js',
  ], 'client');

  api.export( 'Bert' );
});

Package.onTest(function (api) {
  api.use( [ 'tinytest', 'session', 'jquery' ] );
  api.use( 'rcdelfin:bert' );
  api.addFiles( 'tests/client.js', 'client' );
});
