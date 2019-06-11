import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import { CartContext } from './Cart'

const Header = () => (
  <CartContext.Consumer>
    {context => {
      let count = context.items.length

      return (
        <Wrapper>
          <LogoContainer>
            <Link to="/">
              <h1>Tailor Made</h1>
            </Link>
          </LogoContainer>
          <Menu>
            <MenuLink>
              <Link activeStyle={{ color: '#4484ce' }} to="/store">
                Store
              </Link>
            </MenuLink>
            <MenuLink>
              <Link activeStyle={{ color: '#4484ce' }} to="/cart">
                Cart({count})
              </Link>
            </MenuLink>
          </Menu>
        </Wrapper>
      )
    }}
  </CartContext.Consumer>
)

const Menu = styled.ul`
  display: flex;
  list-style: none;
`

const MenuLink = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 1.6rem;
    font-weight: 800;
    font-style: italic;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

const LogoContainer = styled.figure`
  display: block;
  margin: 0;

  h1 {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 1.6rem;
    font-weight: 800;
    font-style: italic;
  }
`

const Wrapper = styled.nav`
  ${containerStyles};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  a {
    text-decoration: none;
  }

  ${media.desktop`
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    `}
`

export default Header
