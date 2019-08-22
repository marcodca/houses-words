import React from "react"
import styled from "styled-components"

const Message = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  z-index: 10;
  color: white;
  padding: 5%;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMessage = () => {
  return (
    <Message>
      <h1>
        Apologies but this web is available in desktop only. The responsive
        design is dark and full of terrors.
      </h1>
    </Message>
  )
}

export default MobileMessage
