import React, { useContext } from 'react';
import { ToggledContext } from '../contexts/ToggledContext';
import styled from 'styled-components';
import blackPaper from '../images/black-paper.png';

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

const Background = ({children}) => {

    const { bannerToggled } = useContext(ToggledContext);

    console.log(bannerToggled)

    return(<StyledBackground>{children}</StyledBackground>)
}

export default Background