module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: [ './public/index.html', './src/**/*.html', './src/**/*.tsx' ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('cssnano')({ preset: 'default' }),
  ]
}