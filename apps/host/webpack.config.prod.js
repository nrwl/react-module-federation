const withModuleFederation = require('@nx/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

module.exports = withModuleFederation({
  ...moduleFederationConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', '//app1.example.com'],
   *   ['app2', '//app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', '//example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', '//example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['about', '//localhost:4201/'],
    ['cart', '//localhost:4202/'],
    ['shop', '//localhost:4203/'],
  ],
});
