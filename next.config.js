module.exports = {
  distDir: '_next',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './components/loader.js',
  },
};
