import React, { useContext } from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import ToggledContextProvider from "../contexts/ToggledContext"
import MainTitle from "../components/MainTitle"
import Banner from "../components/Banner"
import Background from '../components/Background';

const BannersContainer = styled.div`
  display: flex;
  margin-top: 36%;
  justify-content: space-around;
  width: 45%;
`

const IndexPage = () => {

  return (
    <Layout>
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
