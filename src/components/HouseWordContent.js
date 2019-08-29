import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const BigTitle = styled.p`
    font-size: 70px;
`

const TransformFactory = (xOffset = 1, yOffset = 1) => (x, y) => `translate3d(${x / xOffset}px,${y / yOffset}px,0)`

const starkTransform = TransformFactory(2, 2)

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`

const HouseWordContent = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.h1
        style={{ transform: props.xy.interpolate(starkTransform) }}
      >
          <BigTitle>House Stark</BigTitle>
      </animated.h1>
      <animated.h2
        style={{ transform: props.xy.interpolate(trans2) }}
      >
          <BigTitle>from Winterfell</BigTitle>
          
      </animated.h2>
    </div>
  )
}

export default HouseWordContent
