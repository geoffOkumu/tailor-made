import React from 'react'
import { graphql } from 'gatsby'

import ProductList from '../components/containers/ProductsList'

const StorePage = ({ data }) => (
  <>
    <ProductList data={data.products.edges[0].node.frontmatter} />
  </>
)

export default StorePage

export const StoreQuery = graphql`
  query Store {
    products: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "products" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            featuredImg {
              relativePath
            }
            products {
              name
              price
              description
              images {
                childImageSharp {
                  fixed(height: 300, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
