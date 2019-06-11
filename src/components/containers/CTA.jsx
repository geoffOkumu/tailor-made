import React from 'react'
import styled from 'styled-components'

import CopyBlock from '../widgets/CopyBlock'
import Container from '../widgets/Container'
import { Actions, ActionItem } from '../widgets/Actions'

const CTA = ({ copy }) => {
  return (
    <Container>
      <CopyBlock>
        <h1>{copy}</h1>
        <Actions>
          <ActionItem>
            <span>Call</span>
          </ActionItem>
          <ActionItem>
            <span>Whatsapp</span>
          </ActionItem>
          <ActionItem>
            <span>Email</span>
          </ActionItem>
        </Actions>
        <Or>OR</Or>
        <h1>Visit our store at</h1>
        <Map />
      </CopyBlock>
    </Container>
  )
}

export default CTA

const Or = styled.span`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 2.6rem;
  font-weight: 800;
  font-style: italic;

  &::before {
    content: '';
    flex: 1;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textDark};
    margin-right: 1rem;
  }

  &::after {
    content: '';
    margin-left: 1rem;
    flex: 1;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textDark};
  }
`

const Map = styled.div`
  height: 200px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
`
