import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import AboutPageContatainer from '../components/containers/AboutPageContainer'

const AboutPage = ({ data }) => {
  return (
    <>
      <Helmet title="About us" />
      <AboutPageContatainer data={data.aboutPage.edges[0].node.frontmatter} />
    </>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutQuery {
    aboutPage: allMarkdownRemark(
      filter: { frontmatter: { id: { eq: "about-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            headline
            summary
            cta
          }
        }
      }
    }
  }
`
