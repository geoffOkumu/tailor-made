import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { CartContext } from '../components/containers/Cart'
import Container from '../components/widgets/Container'

const CartPage = ({ location }) => (
  <>
    <Container>
      <CartContext.Consumer>
        {({ items, addItem }) => {
          let subtotal = 0

          for (let i = 0; i < items.length; i++) {
            subtotal += items[i].price
          }

          return (
            <Wrapper>
              {items.length > 0 ? (
                <>
                  <section>
                    {items.map(i => (
                      <CartItem key={i.name}>
                        <Img
                          style={{ width: 120, height: 120 }}
                          fixed={i.images[0].childImageSharp.fixed}
                          alt={i.title}
                        />
                        <CartItemCopy>
                          <h3>{i.name}</h3>
                          <span>Ksh {i.price}</span>
                        </CartItemCopy>
                      </CartItem>
                    ))}
                    <CartInfo>
                      <h2>Subtotal: Ksh {subtotal}</h2>
                    </CartInfo>
                  </section>
                  <section>
                    <StyledLink
                      to={
                        location.state && location.state.from
                          ? location.state.from
                          : '/store'
                      }
                    >
                      Continue Shopping
                    </StyledLink>
                    <StyledLink
                      to="/checkout"
                      state={{ products: items, subtotal: subtotal }}
                    >
                      Proceed to checkout
                    </StyledLink>
                  </section>
                </>
              ) : (
                <section>
                  <h2>Nothing in Cart</h2>
                  <span>
                    <Link to="/store">Go to store</Link> to add some items
                  </span>
                </section>
              )}
            </Wrapper>
          )
        }}
      </CartContext.Consumer>
    </Container>
  </>
)

export default CartPage

const Wrapper = styled.div`
  padding: 4rem 0;
`

const CartItem = styled.div`
  display: flex;
  border-bottom: 2px solid #f4f4f4;
  align-items: center;

  img {
    object-fit: contain !important;
  }
`

const CartItemCopy = styled.div`
  margin-left: 2rem;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 500;

  h3 {
    margin-bottom: 0.3rem;
    font-weight: 800;
    font-style: italic;
  }
`

const CartInfo = styled.div`
  font-family: ${({ theme }) => theme.font.sans};
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: 500;

  h2 {
    margin-bottom: 0.3rem;
    font-weight: 800;
    font-size: 2rem;
    font-style: italic;
  }
`

const StyledLink = styled(Link)`
  margin-top: 2rem;
  margin-right: 2rem;
  padding: 1rem 2rem;
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }
`
