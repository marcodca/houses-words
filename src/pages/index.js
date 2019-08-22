import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import ToggledContextProvider from "../contexts/ToggledContext"
import MainTitle from "../components/MainTitle"
import Banner from "../components/Banner"
import Background from "../components/Background"
import { animated, useSpring } from "react-spring"

const BannersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 40%;
`

const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(()=>{
    setIsLoaded(true)
  }, 2000)

  return (
    <Layout>
      {!isLoaded && <LoadingScreen />}
      <SEO title="Home" />
      <ToggledContextProvider>
        <Background>
          <MainTitle />
          <BannersContainer>
            <Banner house={"stark"} />
            <Banner house={"targaryen"} />
            <Banner house={"lannister"} />
          </BannersContainer>
        </Background>
      </ToggledContextProvider>
    </Layout>
  )
}

export default IndexPage
