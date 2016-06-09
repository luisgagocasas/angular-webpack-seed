module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: __dirname,
        filename: "./src/dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html-loader" }
        ]
    }
};