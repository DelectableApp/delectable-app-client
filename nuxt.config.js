module.exports = {
  /*
  ** Headers of the page
  */
  head: require('./config/head'),

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: require('./config/build/postcss'),
  },

  modules: [
    // 'nuxt-sass-resources-loader',
    '@nuxtjs/axios',
  ],

  plugins: [
    './plugins/axios',
  ],

  // sassResources: require('./config/sass-resources'),
};

