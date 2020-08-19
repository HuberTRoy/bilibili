const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    presets: ["@babel/preset-react"],
    plugins: ["@babel/plugin-syntax-dynamic-import"],
  },
  webpack: {
    alias: {
        '@': path.join(path.resolve(__dirname, './src')),
    }
  }
};