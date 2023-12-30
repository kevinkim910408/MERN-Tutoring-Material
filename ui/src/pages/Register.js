import React, { useState } from "react";
import { usePostRegister } from "../api/hooks/mutaters";
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const RegisterAPI = usePostRegister();

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handlePWConfChange = (event) => setPasswordConfirm(event.target.value);

  const handleSubmit = () => {
    if (password !== passwordConfirm) {
      console.log("PW NOT MATCH");
      return;
    }

    RegisterAPI.mutate({ name: username, email, age, password });
  };

  console.log(RegisterAPI?.data);
  return (
    <StyledPage>
      <StyledColorBox>
        <div className="bg-color-left" />
        <StyledOverlayText>
          <p>Register</p>
          <StyledInput
            placeholder="Username"
            onChange={(e) => handleUsernameChange(e)}
          />
          <StyledInput
            placeholder="Email"
            onChange={(e) => handleEmailChange(e)}
          />
          <StyledInput placeholder="Age" onChange={(e) => handleAgeChange(e)} />
          <StyledInput
            placeholder="Password"
            onChange={(e) => handlePasswordChange(e)}
          />
          <StyledInput
            placeholder="Password Confirm"
            onChange={(e) => handlePWConfChange(e)}
          />
          <StyledButton onClick={handleSubmit}>Submit</StyledButton>
          <CharacterImage img={CHARACTER1} height="280" right />
          <CharacterImage img={CHARACTER2} height="210" />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Register;
