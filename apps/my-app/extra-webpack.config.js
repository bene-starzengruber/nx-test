const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  externals: {
    'fabric': 'fabric',
    '@celum/cif-core': 'celum_cif_core',
    '@celum/cif-markers': 'celum_cif_markers'
  },

  plugins: [new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|de/),
    // Define ngDevMode or exception will be thrown (see https://github.com/angular/angular/issues/31595)
    // Angular version 8.2.x
    new webpack.DefinePlugin({
                               ngDevMode: false,
                               VERSION: Date.now().toString()
                             })],
  optimization: {
    // default config taken from https://github.com/webpack-contrib/terser-webpack-plugin
    minimizer: [new TerserPlugin({
                                   terserOptions: {
                                     ecma: undefined,
                                     warnings: false,
                                     parse: {},
                                     compress: {},
                                     mangle: true, // Note `mangle.properties` is `false` by default.
                                     module: false,
                                     output: null,
                                     toplevel: false,
                                     nameCache: null,
                                     ie8: false,
                                     keep_classnames: true, // keep class names -> extension mechanism requires this!
                                     keep_fnames: true,
                                     safari10: false
                                   },
                                 })]
  }
};
