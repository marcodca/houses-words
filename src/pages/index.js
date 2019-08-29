import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import ToggledContextProvider from "../contexts/ToggledContext"
import MainTitle from "../components/MainTitle"
import Banner from "../components/Banner"
import Background from "../components/Background"
import Loading from '../components/Loading';
import { animated, useSpring, useTrail } from "react-spring"

const StyledBannersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 40%;
`

const IndexPage = () => {
  //A small work around. When deployed, there was an awful first print, with some of the images being displayed on top of everything, by doing this, it seems to get solved.
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 0)

  const bannerTrail = useTrail(3, { transform : `translateY(0)`, from: { transform: `translateY(600px)` } })

  const BannersContainer = () => (
    <StyledBannersContainer>
      {bannerTrail.map((animation, index) => (
        <Banner
          house={["stark", "targaryen", "lannister"][index]}
          style={animation}
        />
      ))}
    </StyledBannersContainer>
  )

  return (
    !loading && (
      <Layout>
        <Loading/>
        <SEO title="Home" />
        <ToggledContextProvider>
          <Background>
            <MainTitle />
            <BannersContainer />
          </Background>
        </ToggledContextProvider>
      </Layout>
    )
  )
}

export default IndexPage
