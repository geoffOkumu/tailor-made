import React from 'react'
import { graphql } from 'gatsby'

import ProductShowcase from '../components/containers/ProductShowcase'

const ProductShowcasePage = ({ data }) => {
  const products = data.markdownRemark.frontmatter.showcase

  return (
    <>
      <ProductShowcase products={products} />
    </>
  )
}

export default ProductShowcasePage

export const showcaseTemplateQuery = graphql`
  query showcaseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        showcase {
          title
          customer
          images {
            childImageSharp {
              fluid(maxWidth: 720, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
