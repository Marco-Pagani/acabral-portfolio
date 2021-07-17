<template>
  <Gallery>
    <thumbnail v-for="edge in $page.allProjects.edges" :key="edge.node.id" :node="edge.node" class="mb-6 relative" />
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
  allProjects(filter:{category:{eq: "Character Design"}}) {
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