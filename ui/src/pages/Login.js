import React from "react";
import CHARACTER from "../assets/loginbg.svg";
import {
  StyledPage,
  StyledColorBox,
  StyledOverlayText,
  StyledInput,
  CharacterImage,
  StyledButton,
} from "./style";

const Login = () => {
  return (
    <StyledPage>
      <StyledColorBox>
        <div className="bg-color-left" />
        <StyledOverlayText>
          <p>Log in</p>
          <StyledInput placeholder="Username" />
          <StyledInput placeholder="Password" />
          <StyledButton>Submit</StyledButton>
          <CharacterImage img={CHARACTER} right height="260" />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Login;
