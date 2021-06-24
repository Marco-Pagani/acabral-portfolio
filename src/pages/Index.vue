<template>
  <Layout>
    <div class="min-h-screen p-20 lg:pl-72">
      <div class="pl-25% box-border max-w-4xl mx-auto md:masonry-2 lg:masonry-3 before:box-inherit after:box-inherit">
        <div v-for="edge in $page.allArtworks.edges" :key="edge.node.id" class="mb-6 relative">
            <g-image alt="Logo" :src="edge.node.hero" width="200" class="w-full block" />
            <div class="absolute w-full h-full inset-0 bg-pink flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div class="text-center font-body font-semibold text-xl">{{edge.node.title}}</div>
            </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
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