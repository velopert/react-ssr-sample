const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.ssrJs,
  target: 'node', // bundling for node.js env
  output: {
    path: paths.ssrBuild,
    filename: 'index.js',
    // allows to import the file via require()
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true
            }
          },
          /* css-loader/locals does not create the output */
          {
            test: /\.css$/,
            loader: require.resolve('css-loader/locals')
          },
          /* emitFile: false will not create new files */
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              // it only generates the url to be used in the app
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // NODE_PATH 가 제대로 작동하도록, production 에서 사용한 설정을
    // 그대로 넣어줬습니다.
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    )
  },
  // 여기서는 환경 변수 관련 플러그인만 적용해주면 됩니다.
  plugins: [new webpack.DefinePlugin(env.stringified)]
};
