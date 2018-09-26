import React from 'react'
import { Heading, Text } from 'rebass'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import { CardContainer, Card } from '../components/Card'
import Triangle from '../components/Triangle'
import ImageSubtitle from '../components/ImageSubtitle'
import withNavigation from '../utils/withNavigation'

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
)

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`

const Post = ({ title, text, image, date, time }) => {
  const timestamp = `${date} - ${Math.ceil(time)} min`
  return (
    <Card
      onClick={() => console.log('Click')}
      css={{ cursor: 'pointer' }}
      p={0}
    >
      <EllipsisHeading m={3} p={1}>
        {title}
      </EllipsisHeading>
      {image && <CoverImage src={image} height="200px" alt={title} />}
      <Text m={3}>{text}</Text>
      <ImageSubtitle bg="primaryLight" color="white">
        {timestamp}
      </ImageSubtitle>
    </Card>
  )
}

const Writing = () => (
  <Section.Container id="writing" Background={Background}>
    <Section.Header name="Writing" icon="✍️" label="writing" />
    <CardContainer minWidth="300px">
      <Fade bottom>
        <Post
          key={1}
          id="1"
          uniqueSlug="1"
          createdAt="2018-01-01"
          title="Title"
          virtuals="1"
          author="1"
          text="Text"
          image="image.jpg"
          url="url.com"
          date="2018-01-01"
          time="123456789"
        />
      </Fade>
    </CardContainer>
  </Section.Container>
)

export default withNavigation({ label: 'Writing', id: 'writing' })(Writing)
