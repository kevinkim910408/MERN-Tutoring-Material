import React, { useEffect, useState } from "react";
import { usePostLogin } from "../api/hooks/mutaters";
import { useNavigate } from "react-router-dom";
import CHARACTER from "../assets/loginbg.svg";
import { cookie } from "../data/cookie";
import {
  StyledPage,
  StyledColorBox,
  StyledOverlayText,
  StyledInput,
  CharacterImage,
  StyledButton,
} from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const LoginAPI = usePostLogin();

  const handleSubmit = () => {
    LoginAPI.mutate({ email, password });
  };
  console.log(LoginAPI?.data?.data?.token);

  useEffect(() => {
    if (LoginAPI?.isSuccess) {
      cookie.set("Authorization", LoginAPI?.data?.data?.token);
      navigate("/");
    }
  }, [LoginAPI?.isSuccess]);

  return (
    <StyledPage>
      <StyledColorBox>
        <div className="bg-color-left" />
        <StyledOverlayText>
          <p>Log in</p>
          <StyledInput
            placeholder="Email"
            onChange={(e) => handleEmailChange(e)}
          />
          <StyledInput
            placeholder="Password"
            onChange={(e) => handlePasswordChange(e)}
          />
          <StyledButton onClick={handleSubmit}>Submit</StyledButton>
          <CharacterImage img={CHARACTER} right height="260" />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Login;
