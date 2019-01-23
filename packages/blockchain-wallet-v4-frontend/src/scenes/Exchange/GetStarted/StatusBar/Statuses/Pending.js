import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Text } from 'blockchain-info-components'
import Media from 'services/ResponsiveService'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 500px;
  padding: 16px;
  box-sizing: border-box;
  background-color: #f5a623;
  border-radius: 4px;

  & > :not(:first-child) {
    margin-top: 8px;
  }
  ${Media.laptop`
    width: 100%;
  `};
`

export const Pending = () => (
  <Wrapper>
    <Text color='white' size='14px' weight={400}>
      <FormattedMessage
        id='scenes.exchange.getstarted.status.pending.title'
        defaultMessage='Account verification in progress'
      />
    </Text>
    <Text size='14px' weight={300}>
      <FormattedMessage
        id='scenes.exchange.getstarted.status.pending.description'
        defaultMessage='We are currently reviewing your application. Hang tight! In just a few minutes you will be all set to trade cryptocurrency. You should receive an update within 5 minutes.'
      />
    </Text>
  </Wrapper>
)

export default Pending
