const _ = require('lodash')
const path = require('path')

const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "showcase" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const showcase = result.data.allMarkdownRemark.edges

    showcase.forEach(edge => {
      const id = edge.node.id

      if (edge.node.frontmatter.templateKey === 'showcase') {
        createPage({
          path: '/showcase/' + _.kebabCase(edge.node.frontmatter.title),
          component: path.resolve(`src/templates/showcase.jsx`),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })
  })
}
