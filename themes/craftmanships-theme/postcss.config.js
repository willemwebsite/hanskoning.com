module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: [
              './themes/craftmanships-theme/layouts/**/*.html',
              './themes/craftmanships-theme/assets/js/*.js',
              './themes/craftmanships-theme/static/js/*.js',
              './layouts/**/*.html',
              './static/js/*.js'
            ],
          whitelist: [
              'highlight',
              'language-bash',
              '@font-face'
              'pre',
              'video',
              'code',
              'content',
              'h3',
              'h4',
              'ul',
              'li',
          ],
          whitelistPatterns: [
              '/pg*/',
          ],
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};
