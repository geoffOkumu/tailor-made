import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { navigate } from 'gatsby'

import Container from '../widgets/Container'
import { CartContext } from './Cart'
import { media } from '../styles/utils'

const ProductList = ({ data }) => (
  <section>
    <Header>
      <Container>
        <h2>Accesories Shop</h2>
      </Container>
    </Header>

    <Container>
      <Wrapper>
        {data.products.map(i => (
          <ProductItem key={i.name}>
            <ProductImage>
              <Img
                style={{ width: '100%', objectFit: 'contain' }}
                fixed={i.images[0].childImageSharp.fixed}
              />
            </ProductImage>
            <CartContext.Consumer>
              {({ items, addItem }) => (
                <button
                  onClick={() => {
                    if (items.indexOf(i) !== -1) {
                      navigate('/cart', { state: { from: '/store' } })
                    } else {
                      addItem(i)
                      navigate('/cart', { state: { from: '/store' } })
                    }
                  }}
                >
                  Buy
                </button>
              )}
            </CartContext.Consumer>

            <h3>{i.name}</h3>
            <span>{i.price}</span>
          </ProductItem>
        ))}
      </Wrapper>
    </Container>
  </section>
)

export default ProductList

const Header = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0.3rem 0;

  h2 {
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 2.6rem;
    font-weight: 800;
    font-style: italic;
  }
`

const Wrapper = styled.div`
  padding: 80px 0;
  display: flex;
  flex-wrap: wrap;
`

const ProductImage = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  width: 100%;

  img {
    object-fit: contain !important;
  }
`
const ProductItem = styled.div`
  width: calc(25% - 2rem);
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 3rem;

  ${media.phone`
    width: 100% !important;
    margin-right: 0;
    margin-left: 0;
  `}

  ${media.tablet`
    width: calc(50% - 2rem)
  `}

  h3 {
    font-family: ${({ theme }) => theme.font.sans};
    margin-bottom: 0.3rem;
    font-weight: 800;
    font-style: italic;
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.font.sans};
    padding: 1rem 2rem;
    text-align: center;
    border: none;
    text-decoration: none;
    display: inline-block;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &[disabled] {
      background-color: ${({ theme }) => theme.colors.textLight};
      cursor: not-allowed;
    }
  }
`
