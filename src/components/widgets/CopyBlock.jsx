import styled, { css } from 'styled-components'

import { media } from '../styles/utils'

const CopyBlock = styled.section`
  padding: 80px 0;

  h1 {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 2.6rem;
    font-weight: 800;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textDark};
    max-width: 70%;

    ${media.tablet`
      max-width: 100%;
    `}
  }

  h2 {
    font-family: ${({ theme }) => theme.font.sans};
    font-size: 2rem;
    font-weight: 800;
    font-style: italic;
    color: ${({ theme }) => theme.colors.textDark};
    max-width: 70%;

    ${media.tablet`
      max-width: 100%;
    `}
  }
`

export default CopyBlock
