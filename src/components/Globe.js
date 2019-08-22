import React, { useContext } from "react"
import styled, { keyframes, css } from "styled-components"
import { animated, useSpring } from "react-spring"
import { ToggledContext } from "../contexts/ToggledContext"
//
import map from "../images/map.png"
import winterfell from "../images/winterfell.png"
import dragonstone from "../images/dragonstone.png"
import casterlyRock from "../images/casterly-rock.png"

/*
Original idea by zFunx : https://codepen.io/zFunx/pen/dZaGJG. 
*/

const OutterGlobe = styled(animated.div)`
  width: 500px;
  height: 500px;
  position: fixed;
  top: 40%;
  bottom: 0;
  left: 2%;
  right: 300;
  margin: auto;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000;
  z-index: 0;
  cursor: none;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: -20px -20px 50px 2px #000 inset;
    border-radius: 50%;
  }
`
//Utils
const calc = x => x - window.innerWidth / 2
const globeTrans = x => `translateX(${x / 2}px)`

const Globe = ({ isAnimating }) => {
  const {
    bannerToggled: { isToggled, banner },
  } = useContext(ToggledContext)

  //Mouse "parallax" at the globe

  const [props, set] = useSpring(() => ({
    x: 0,
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  const OutterGlobeAnimation = useSpring({
    to: isToggled
      ? { opacity: 0.4, transform: "scale(1.2)", pointerEvents: "none" }
      : { opacity: 0.6, transform: "scale(1)", pointerEvents: "all" },
  })

  const InnerGlobe = styled(animated.div)`
    width: 200%;
    height: 100%;
    background: ${() => {
      return !isToggled
        ? `url(${map})`
        : () => {
            switch (banner) {
              case "stark":
                return `url(${winterfell})`
              case "lannister":
                return `url(${casterlyRock})`
              case "targaryen":
                return `url(${dragonstone})`
              default:
                return ""
            }
          }
    }};
    animation: ${!isAnimating &&
        keyframes`
    to {
    transform: translateX(-50%);
  }`}
      30s linear alternate infinite;
    background-size: cover;
    ${isToggled &&
      css`
        &::after {
          content: ${() => {
            return banner === "stark"
              ? '"winterfell"'
              : banner === "targaryen"
              ? '"dragonstone"'
              : '"casterly rock"'
          }};
          font-family: papyrus;
          position: absolute;
          text-transform: capitalize;
          font-weight: bolder;
          font-size: 48px;
          top: 70%;
          left: 30%;
          opacity: 0.8;
        }
      `}
  `

  return (
    <OutterGlobe
      style={OutterGlobeAnimation}
      onMouseMove={({ clientX: x }) => set({ x: calc(x) })}
    >
      <InnerGlobe style={{ transform: props.x.interpolate(globeTrans) }} />
    </OutterGlobe>
  )
}

export default Globe
