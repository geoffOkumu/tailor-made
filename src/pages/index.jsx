import React from 'react'
import { graphql } from 'gatsby'

import HomePage from '../components/containers/HomePage'

const IndexPage = ({ data }) => (
  <>
    <HomePage data={data} />
  </>
)

export default IndexPage

export const indexQuery = graphql`
  query IndexPageTemplate {
    copy: markdownRemark(frontmatter: { id: { eq: "home-page" } }) {
      frontmatter {
        title
        headline
        tagline
        cta
      }
    }
    showcase: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "showcase" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImg {
              childImageSharp {
                fixed(width: 480, height: 600, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
