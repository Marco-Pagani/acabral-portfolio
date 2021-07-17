// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const slug = require('limax')

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Projects: {
        slug: {
          type: 'String',
          resolve(obj) {
            return `/${slug(obj.category)}/${slug(obj.title)}`
          }
        }
      }
    })
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allProjects {
          edges {
            node {
              title
              category
              hero
              slug
              post
            }
          }
        }
      }`)

    data.allProjects.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: './src/templates/Project.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
