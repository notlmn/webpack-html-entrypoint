const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DST_DIR = path.resolve(__dirname, 'dist');

function getRelativePathFromSourceDir(filePath) {
  return path.dirname(path.relative(SRC_DIR, filePath));
}

function getPath(filePath) {
  return `${getRelativePathFromSourceDir(filePath)}/[name].[ext]`;
}

function getHashedPath(filePath) {
  return `${getRelativePathFromSourceDir(filePath)}/[name]-[hash].[ext]`;
}

module.exports = {
  mode: 'development',
  entry: path.resolve(SRC_DIR, 'index.html'),
  output: {
    publicPath: '/',
    path: DST_DIR
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: getPath
            }
          },
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href', 'script:src']
            }
          }
        ]
      },
      {
        test: /\.(m?js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: getHashedPath
            }
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: "> 5%, not dead"
                  }
                ]
              ],
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
      	use: [
          {
            loader: 'file-loader',
            options: {
              name: getHashedPath
            }
          },
          'extract-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
      	]
      },
      {
        test: /\.(jpg|jpeg|png|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: getHashedPath
            }
          }
        ]
      }
    ]
  }
};
