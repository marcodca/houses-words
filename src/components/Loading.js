import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 10;
`

const LoadingText = styled.p`
  font-family: "games-of-thrones", sans-serif;
  display: block;
  width: 20%;
  font-size: 48px;
  margin: 20% auto;
  color: whitesmoke;
`

const Letter = styled(animated.span)

const loading  = "loading".split("")

const Loading = () => {
  const letterAnimation = useSpring({
     to : { opacity: 1, transform: 'translateY(0)'  },
    from: { opacity: 0,  transform: 'translateY(-100px)'},
  })

  return (
    <Container>
      <LoadingText>
        <animated.span style={letterAnimation}>a</animated.span>
      </LoadingText>
    </Container>
  )
}

export default Loading
