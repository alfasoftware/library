
import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoadingContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 5px;
margin: 10px;
font-size: 30px;
`

const PageLoader = () => {

    return (<StyledLoadingContainer>Just a minute...

<Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        style={{marginTop: "20px"}}
   
      />
    </StyledLoadingContainer>);
}
 
export default PageLoader;