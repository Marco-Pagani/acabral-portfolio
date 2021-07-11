<template>
  <Gallery>
    <div v-for="edge in $page.allArtworks.edges" :key="edge.node.id" class="mb-6 relative">
      <thumbnail :node="edge.node" />
    </div>
  </Gallery>
</template>

<script>
import Thumbnail from '@/components/thumbnail'
export default {
  components: {
    Thumbnail
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

<page-query>
query {
  allArtworks {
		edges {
      node {
        title
        category
        hero
      }
    }
  }
}
</page-query>