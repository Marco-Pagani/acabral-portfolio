<template>
  <Layout>
    <div>
      {{$page.projects.title}}
    </div>
     <div v-html="$page.projects.content" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  projects(id: $id) {
    title
    content
  }
}
</page-query>