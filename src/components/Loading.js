import React, { useState } from "react"
import { animated, useTrail, useSpring } from "react-spring"
import styled from "styled-components/macro"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  background-image: radial-gradient(circle, #000000, #171213, #261d1e, #372829, #483434);
  z-index: 10;
`

const LoadingText = styled.p`
  font-family: "games-of-thrones", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: auto 0;
  font-size: 48px;
  margin: 15% auto 5% auto;
  color: whitesmoke;
  min-height: 70px;
`

const Letter = styled(animated.span)`
  display: inline-block;
`

const LoadingBarOutter = styled.div`
  width: 400px;
  height: 10px;
  background: white;
  border-radius: 8px;
  margin: 0 auto;
`

const LoadingBarInner = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: grey;
  border-radius: inherit;
`

const loading = "loading".split("")

const Loading = () => {
  const letterTrail = useTrail(loading.length, {
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(50%)" },
  })

  const loadingBarAnimation = useSpring({clipPath: `inset(0% 0% 0% 100%)`, from : {clipPath: `inset(0% 0% 0% 0%)`}, delay: 900})

  return (
    <Container>
      <LoadingText>
        {letterTrail.map((animation, index) => (
          <Letter style={animation}>{loading[index]}</Letter>
        ))}
      </LoadingText>
      <LoadingBarOutter>
        <LoadingBarInner style={loadingBarAnimation} />
      </LoadingBarOutter>
    </Container>
  )
}

export default Loading
