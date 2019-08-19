import React from "react"
import styled, { keyframes } from "styled-components/macro"
import { animated, useSpring } from "react-spring"

import ring from "../images/ring.png"

const Container = styled.div`
  margin-top: 3%;
  width: 33%;
  font-family: "games-of-thrones", sans-serif;
  position: relative;
`

const Title = styled(animated.h1)`
  margin-left: 48px;
  margin-top: 94px;
  font-size: 3.2rem;
  line-height: 5rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
`

const Ring = styled(animated.img)`
  position: absolute;
  width: 345px;
  top: 0;
  z-index: -1;
  animation: ${keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`} 30s linear infinite;
`

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 2 + 37 }px,${y / 10 + 22}px,0)`
const trans2 = (x, y) => `translate3d(${x / 2 + 35}px,${y / 8 - 270}px,0)`

const MainTitle = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <Title style={{ transform: props.xy.interpolate(trans1) }}>
        <span
          css={`
            font-weight: 200;
          `}
        >
          Houses
        </span>
        <br /> <b>words</b>
      </Title>
      <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
        <Ring alt="" src={ring} />
      </animated.div>
    </Container>
  )
}

export default MainTitle
