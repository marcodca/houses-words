import React, { useContext } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { ToggledContext } from "../contexts/ToggledContext"

const Title = styled(animated.h1)`
  font-family: "games-of-thrones", sans-serif;
  position: absolute;
  left: 11%;
  top: 2%;
  font-size: 3.2rem;
  line-height: 5rem;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
`
const MainTitle = () => {
  const { bannerToggled : { isToggled} } = useContext(ToggledContext);

  const TitleAnimation = useSpring({ to : isToggled ? {opacity: 0} : {opacity : 1} })


  return (
      <Title
        style={TitleAnimation}
      >
        <span
          css={`
            font-weight: 200;
          `}
        >
          Houses
        </span>
        <br /><b>words</b>
      </Title>
  )
}

export default MainTitle
