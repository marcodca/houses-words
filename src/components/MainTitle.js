import React, { useContext } from "react"
import styled, { keyframes } from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { ToggledContext } from '../contexts/ToggledContext'

import ring from "../images/ring.png"

const Container = styled.div`
  margin-top: 3%;
  width: 33%;
  font-family: "games-of-thrones", sans-serif;
  position: relative;
  right: 22%;
`

const Title = styled(animated.h1)`
  margin-left: 48px;
  margin-top: 94px;
  font-size: 3.2rem;
  line-height: 5rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
  text-align: left;
`

//Note: for animations that are repeting, I found that the css aproach seems to work much better, not sure if it has to do with ssr.
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

  const { bannerToggled } = useContext(ToggledContext);

  //Set opacity 0 when a banner is toggled
  const ringAnimation = useSpring({ from : { opacity : 1}, to : bannerToggled.isToggled ? {opacity: 0} : { opacity : 1}})

  //Mouse parallax
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
        <Ring alt="" src={ring} style={ringAnimation}/>
      </animated.div>
    </Container>
  )
}

export default MainTitle
