import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

import blackPaper from "../images/black-paper.png"

const Background = styled.div`
  position: relative;
  background: rgb(125, 123, 114);
  background: url(${blackPaper}) repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <h1 style={{ margin: 0 }}>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Background>
  </Layout>
)

export default IndexPage
