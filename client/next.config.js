module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300; //makes nextjs watch for changes faster
    return config;
  },
};
