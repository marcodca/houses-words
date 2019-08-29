import React, { useContext } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import starkBanner from "../images/stark-banner.svg"
import lanisterBanner from "../images/lannister-banner.svg"
import targaryenBanner from "../images/targaryen-banner.svg"

import { ToggledContext } from "../contexts/ToggledContext"
import { animated, useSpring } from "react-spring"

const Container = animated.div

const HouseBanner = styled(animated.img)`
  width: 130px;
  height: ${props => (props.house === "stark" ? 170 : 140)}px;
  cursor: pointer;
`
const Banner = ({ house, style }) => {
  const { setToggled, setNotToggled, bannerToggled } = useContext(
    ToggledContext
  )

  const bannerAnimation = useSpring({
    from: { transform: `scale(1)`, filter: `invert(0%)` },
    to:
      bannerToggled.isToggled && bannerToggled.banner === house
        ? { transform: `scale(1.2)`, filter: `invert(100%)` }
        : { transform: `scale(1)`, filter: `invert(0%)` },
  })

  const containerAnimation = useSpring({
    transform: "translateY(0)",
    from: { transform: "translateY(-1000px)"} , delay: house === 'stark' ? 0 : house === 'targaryen' ? 150 : 300
  })

  const setBannerImg = () => {
    switch (house) {
      case "stark":
        return starkBanner
      case "lannister":
        return lanisterBanner
      case "targaryen":
        return targaryenBanner
      default:
        return ""
    }
  }
//style={containerAnimation}
  return (
    <Container style={style}>
      <HouseBanner
        style={bannerAnimation}
        src={setBannerImg()}
        alt={`${house} banner`}
        house={house}
        onMouseEnter={() => {
          setToggled(house)
        }}
        onMouseLeave={setNotToggled}
      />
    </Container>
  )
}

Banner.propTypes = {
  house: PropTypes.oneOf(["stark", "lannister", "targaryen"]).isRequired,
}

export default Banner
