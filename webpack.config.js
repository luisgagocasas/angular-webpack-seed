var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname,
        filename: "./src/dist/bundle.js"
    },
    plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      server: {
        baseDir: ['src']
      },
      notify: false,
      //injectChanges: true,
      online: true,
      xip: false,
      tunnel: false,
      ghostMode: {
        clicks: true,
        scroll: true,
        links: true,
        forms: true
      },
      open: "ui",
    })
  ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html-loader" }
        ]
    }
};