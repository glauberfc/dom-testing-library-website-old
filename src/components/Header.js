import React from 'react'
import Headroom from 'react-headroom'
import { Flex, Image } from 'rebass'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import RouteLink from './RouteLink'
import Logo from './Logo/Main-logo.svg'
import { SectionConsumer } from './SectionContext'

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <a href="#home">
          <Image src={Logo} width="300px" alt="Dom Testing Library" />
        </a>
        <Flex mr={[0, 3, 5]}>
          <SectionConsumer>
            {({ sections }) =>
              sections.map(({ label, id }) => (
                <RouteLink label={label} to={id} />
              ))
            }
          </SectionConsumer>
        </Flex>
      </Flex>
    </Fade>
  </HeaderContainer>
)

export default Header
