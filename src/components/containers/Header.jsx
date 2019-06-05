import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { containerStyles } from '../widgets/Container'
import { media } from '../styles/utils'
import External from '../svg/external'

const Header = () => (
  <Wrapper>
    <LogoContainer>
      <Link to="/">
        <h1>Tailor Made</h1>
      </Link>
    </LogoContainer>
    <Menu>
      <MenuLink>
        <Link to="about">ABOUT</Link>
      </MenuLink>
    </Menu>
  </Wrapper>
)

const Menu = styled.ul`
  display: flex;
  list-style: none;
`

const MenuLink = styled.li`
  margin-left: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textDark};
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: 700;

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
  height: 100px;

  a {
    text-decoration: none;
  }
`

export default Header
