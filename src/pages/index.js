import React, { useState } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import ToggledContextProvider from "../contexts/ToggledContext"
import MainTitle from "../components/MainTitle"
import Banner from "../components/Banner"
import Background from "../components/Background"
import Loading from "../components/Loading"
import { animated, useTrail, useTransition } from "react-spring"

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

  //small work around to fix a first print issue;
  const [isReady, setIsReady] = useState(false)

  setTimeout(() => {
    setIsReady(true)
  }, 0)

  //Loading simulation
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)

  const loadingTransition = useTransition(loading, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const bannerTrail = useTrail(3, {
    transform: `translateY(0)`,
    from: { transform: `translateY(600px)` },
  })

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
    isReady && (
      <Layout>
        {loadingTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props}>
                <Loading />
              </animated.div>
            )
        )}
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
