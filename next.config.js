const { DeleteSourceMapsPlugin } = require('webpack-delete-sourcemaps-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')();

const nextConfig = {
  devtool: 'hidden-source-map',
  plugins: [
    new DeleteSourceMapsPlugin()
  ]
};

module.exports = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;
