import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import CTA from './CTA'
import { media } from '../styles/utils'

const ProductShowcase = ({ products }) => {
  return (
    <section>
      <GalleryWrapper>
        {products.map(i => (
          <GalleryItem key={products.indexOf(i)}>
            <GalleryItemCopy>
              <h3>{i.title}</h3>
              <span>- {i.customer}</span>
            </GalleryItemCopy>
            {i.images.map(image => (
              <div key={i.images.indexOf(image)}>
                <Img
                  style={{ width: '100%' }}
                  fluid={image.childImageSharp.fluid}
                  alt={image.title}
                />
              </div>
            ))}
          </GalleryItem>
        ))}
      </GalleryWrapper>
      <CTA copy="Contact us now to get yours" />
    </section>
  )
}

export default ProductShowcase

const GalleryWrapper = styled.div`
  display: block;
`

const GalleryItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 4rem;

  div {
    &:nth-child(2) {
      grid-column: 2/4;
    }
  }

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;

    div {
      &:nth-child(2) {
        grid-column: 1/3;
      }
  }
  `}
`

const GalleryItemCopy = styled.div`
  padding-left: 1rem;
  margin-top: 80px;
  grid-column: 1/2;

  h3 {
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 2.6rem;
    font-style: italic;
    margin-bottom: 0;
    font-weight: 800;
  }

  span {
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.textDark};
    font-weight: 500;
    font-size: 1.4rem;
  }

  ${media.tablet`
    grid-column: 1/4;
    margin-top: 0;
    margin-bottom: 1rem;
  `}
`
