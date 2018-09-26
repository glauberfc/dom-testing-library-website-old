import React, { Fragment } from 'react'
import { Heading } from 'rebass'
import Section from '../components/Section'
import Triangle from '../components/Triangle'

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
)

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <Fragment>
      <Heading
        textAlign="center"
        is="h1"
        color="primary"
        fontSize={[5, 6, 8]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm Glauber!`}
      </Heading>
    </Fragment>
  </Section.Container>
)

export default LandingPage
