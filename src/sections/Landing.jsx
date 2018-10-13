import React, { Fragment } from 'react'
import { Heading, Box, Image, Button, Flex } from 'rebass'
import Section from '../components/Section'
import pulpoPattern from '../../media/pulpo-pattern.jpg'

const Background = () => (
  <Box
    width="1"
    bg="#333"
    css={{
      position: 'absolute',
      'z-index': -2,
    }}
  >
    <Image width="1" src={pulpoPattern} css={{ opacity: 0.1 }} />
  </Box>
)

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Box width={0.55} m={[0, 'auto']}>
        <Heading
          textAlign="center"
          is="h1"
          color="light"
          fontSize={[5, 6]}
          mb={[3, 4, 5]}
        >
          Simple and complete DOM testing utilities that encourage good testing
          practices
        </Heading>

        <Flex>
          <Button>Get started</Button>
          <Button>Documentation</Button>
        </Flex>
      </Box>
    </Fragment>
  </Section.Container>
)

export default LandingPage
