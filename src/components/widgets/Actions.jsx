import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/utils'

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`

export const ActionItem = styled.div`
  padding: 1rem 3rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.textLight};
  overflow: hidden;
  position: relative;
  transform: skewX(-20deg);
  position: relative;
  text-align: center;
  cursor: pointer;

  ${media.phone`
    padding: .5rem 1rem;
    margin-right: 1rem;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  span {
    transform: skewX(20deg);
    display: block;
    font-family: ${({ theme }) => theme.font.sans};
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 2rem;
    font-weight: 800;
    font-style: italic;

    ${media.phone`
      font-size: 1.2rem;
  `}
  }
`
