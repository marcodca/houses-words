// import React, { useState } from "react";
// import styled from "styled-components"

// const Message = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: black;
//   z-index: 10;
//   color: white;
//   padding: 5%;
//   text-align: center;
// `

// const MobileMessage = () => {
//   const [isMobile, setIsMobile] = useState(false)

//   window.addEventListener("resize", () => {
//     window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false)
//   })

//   return (
//     isMobile && (
//       <Message>
//         <h1 style={{ color: "white" }}>
//          Apologies but this web is available in desktop only. The responsive
//           design is dark and full of terrors.
//         </h1>
//       </Message>
//     )
//   )
// }

// export default MobileMessage
