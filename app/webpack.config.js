const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (_) => {
  return {
    entry: './index.jsx',
    output: {
      filename: 'bundle.js',
      publicPath: "auto",
      uniqueName: "mfe4",
      scriptType:"text/javascript"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new ModuleFederationPlugin({
          name: "reactApp",
          filename: "remoteEntry.js", 
          exposes: {
              './BuilderModule': './app.jsx',
          },        
          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],
    devServer: {
      port: 4204
    }
  }
}
