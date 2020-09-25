const metaData = {
  title: 'José Maria Carneiro',
  description: 'José Maria Carneiro. Full-Stack Developer.',
  analyticsKey: process.env.GOOGLE_ANALYTICS_KEY,
  pwa: {
    name: 'josecarnei.ro',
    themeColor: '#f3f3f3',
    msTileColor: '#ffffff'
  }
};

module.exports = {
  outputDir: './dist',
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      Object.assign(args[0], { data: { meta: metaData } });
      return args;
    });
  },
  pwa: {
    ...metaData.pwa,
    workboxOptions: {
      skipWaiting: true
    }
  },
  pluginOptions: {
    // critical: {
    //   width: 1920,
    //   height: 1080,
    //   base: './../dist'
    // }
  }
};
