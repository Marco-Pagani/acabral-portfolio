// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import GalleryLayout from '~/layouts/Gallery.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Gallery', GalleryLayout)

  head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  })
  head.script.push({
    type: 'text/javascript',
    src: '/netlify.js',
    body: true
  })
}
