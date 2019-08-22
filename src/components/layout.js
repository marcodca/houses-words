import React, { useState } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import MobileMessage from '../components/MobileMessage';
import gameOfThrones from '../fonts/GameofThrones.ttf'
import 'typeface-anton';

const Layout = ({ children }) => {
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  setTimeout(()=>{
    setIsLoaded(true)
  }, 2000)

  const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  @font-face {
  font-family: "games-of-thrones";
  src: url(${gameOfThrones}) format('truetype');
}

  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: anton , sans-serif;
    display: ${ ()=> isLoaded ? 'block' : 'none'}
  }
  a {
    text-decoration: none;
  }
`


  return (
    <>
    <p>ahm</p>
      <GlobalStyle/>
      <MobileMessage/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
