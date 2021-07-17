// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'Amanda Cabral | Designer',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link'
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Projects'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      }
    }
  }
}
