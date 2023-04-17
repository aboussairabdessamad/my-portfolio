module.exports = {
  // ... other webpack config options ...
  resolve: {
    fallback: {
        fs: false,
        os: require.resolve("os-browserify/browser"),
        https: require.resolve("https-browserify"),
        stream: require.resolve("stream-browserify"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      https: "https-browserify",
      os: "os-browserify/browser",
      stream: "stream-browserify",
    }),
  ],
};
