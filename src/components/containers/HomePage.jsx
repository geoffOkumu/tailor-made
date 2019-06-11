import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Container from '../widgets/Container'
import CopyBlock from '../widgets/CopyBlock'
import CTA from './CTA'
import { media } from '../styles/utils'

const HomePage = ({ data }) => {
  const { tagline, cta } = data.copy.frontmatter
  const showcase = data.showcase.edges

  return (
    <React.Fragment>
      <CopyBlock>
        <Container>
          <h1>{tagline}</h1>
        </Container>
      </CopyBlock>
      <ShowcaseContainer>
        {showcase.map(i => (
          <ShowcaseItem key={i.node.frontmatter.title}>
            <Link to={'/showcase/' + kebabCase(i.node.frontmatter.title)}>
              <ShowcaseOverlay>
                <h2>{i.node.frontmatter.title}</h2>
              </ShowcaseOverlay>
              <Img
                style={{ width: '100%' }}
                fixed={i.node.frontmatter.featuredImg.childImageSharp.fixed}
              />
            </Link>
          </ShowcaseItem>
        ))}
      </ShowcaseContainer>
      <CTA copy={cta} />
      {/* <ProductList /> */}
    </React.Fragment>
  )
}

export default HomePage

const ShowcaseContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const ShowcaseItem = styled.div`
  width: 25%;
  height: 600px;
  position: relative;

  ${media.phone`
    width: 100% !important;
  `}

  ${media.tablet`
    width: 50%;
  `}
`

const ShowcaseOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 100;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }

  h2 {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 2.6rem;
    font-weight: 800;
    font-style: italic;
    color: #fff;
    margin-top: 400px;
  }
`
