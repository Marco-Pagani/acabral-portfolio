<template>
  <Gallery>
    <div v-for="edge in $page.allProjects.edges" :key="edge.node.id" class="mb-6 relative">
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
  allProjects(filter:{category:{eq: "Illustration"}}) {
		edges {
      node {
        title
        category
        hero
        slug
      }
    }
  }
}
</page-query>