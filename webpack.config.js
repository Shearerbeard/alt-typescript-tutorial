/**
 * Created by shearerbeard on 5/25/15.
 */
var path = require("path");

module.exports = {
    devtool: "source-map",
    entry: {
      app: ["./src/app.ts"]
    },
    output: {
        path: path.join(__dirname, "target"),
        filename: "[name].bundle.js",
        publicPath: "/static/"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html"],
        modulesDirectories: ["node_modules", "bower_components"]
    },
    module: {
        loaders: [{
              test: /\.ts$/,
              loader: "react-hot!awesome-typescript?useWebpackText=true!ts-jsx-loader?harmony=true"
            }
        ]
	}
};
