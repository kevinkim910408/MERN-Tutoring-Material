import React from "react";
import CHARACTER1 from "../assets/regibg.svg";
import CHARACTER2 from "../assets/regibg1.svg";
import {
  StyledPage,
  StyledColorBox,
  StyledOverlayText,
  StyledInput,
  CharacterImage,
  StyledButton,
} from "./style";
const Register = () => {
  return (
    <StyledPage>
      <StyledColorBox>
        <div className="bg-color-left" />
        <StyledOverlayText>
          <p>Register</p>
          <StyledInput placeholder="Username" />
          <StyledInput placeholder="Password" />
          <StyledInput placeholder="Password Confirm" />
          <StyledInput placeholder="Age" />
          <StyledButton>Submit</StyledButton>
          <CharacterImage img={CHARACTER1} height="280" right />
          <CharacterImage img={CHARACTER2} height="210" />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Register;
