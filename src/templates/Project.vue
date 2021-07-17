<template>
    <Layout>
  <div>
      test
  </div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  projects(id: $id) {
    title
    post
  }
}
</page-query>