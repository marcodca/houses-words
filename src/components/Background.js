import React, { useContext } from "react"
import { ToggledContext } from "../contexts/ToggledContext"
import styled from "styled-components"
import blackPaper from "../images/black-paper.png"
import buried from "../images/buried.png"
import { animated, useTransition, config } from "react-spring"
import Globe from './Globe';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
  position: relative;
  background: rgb(125, 123, 114);
  background: url(${blackPaper}) repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(45, 42, 39);
    background: linear-gradient(
      180deg,
      rgba(45, 42, 39, 1) 0%,
      rgba(133, 88, 79, 0.7091211484593838) 50%,
      rgba(24, 17, 17, 1) 100%
    );
    opacity: 0.8;
    z-index: -5;
  }
`

const InnerBackground = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${(props) => {
          switch (props.house) {
            case "stark":
              return "linear-gradient(180deg, rgba(109,124,121,1) 0%, rgba(79,109,133,1) 50%, rgba(9,0,181,1) 100%)"
            case 'targaryen' :
                return 'linear-gradient(180deg, rgba(199,173,53,1) 0%, rgba(184,82,39,1) 50%, rgba(181,0,7,1) 100%)'
            case 'lannister' :
                return "linear-gradient(180deg, rgba(254,246,208,1) 0%, rgba(224,224,96,1) 50%, rgba(177,181,0,1) 100%)"
            default :
            return ''
          }
        }};
     &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(${buried}) repeat;
    }
`

InnerBackground.propTypes = {
    house: PropTypes.oneOf(["stark", "lannister", "targaryen"]).isRequired,
  }

const Background = ({ children }) => {
  const { bannerToggled } = useContext(ToggledContext)
  const innerBackgroundTransition = useTransition(
    bannerToggled.isToggled,
    null,
    {
      from: {
        clipPath: `inset(100% 0% 0% 0%)`,
        opacity: 0,
      },
      enter: {
        clipPath: `inset(-5% 0% 0% 0%)`,
        opacity: 0.9,
      },
      leave: {
        clipPath: `inset(100% 0% 0% 0%)`,
        opacity: 0,
      },
      config: { ...config.slow },
    }
  )



  return (
    <StyledBackground>
      {innerBackgroundTransition.map(
        ({ item, key, props }) =>
          item && (
            <InnerBackground style={props} house={bannerToggled.banner}>
              <h3>Heyyy</h3>
            </InnerBackground>
          )
      )}
      {children}
      <Globe/>
    </StyledBackground>
  )
}

export default Background
