<template>
  <Layout>
    <div>
      {{$page.projects.title}}
    </div>
    <div>
      {{$page.projects.post}}
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