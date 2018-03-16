var Encore = require('@symfony/webpack-encore');
const { GenerateSW } = require('workbox-webpack-plugin');

Encore
  .setOutputPath('site/assets')
  .setManifestKeyPrefix('assets')
  .setPublicPath('/fluent-bootstrap/assets')
  .addEntry('fluent-bootstrap', './js/fluent-bootstrap.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .addPlugin(new GenerateSW({
    globDirectory: '_site',
    globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf}'],
    swDest: './../service-worker.js'
  }))
;
if (Encore.isProduction()) {
  Encore
    .enablePostCssLoader()
    .cleanupOutputBeforeBuild()
  ;
}

module.exports = Encore.getWebpackConfig();
