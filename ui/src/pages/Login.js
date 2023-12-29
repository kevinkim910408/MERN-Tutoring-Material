import React from "react";
import styled from "styled-components";
import CHARACTER from "../assets/loginbg.svg";

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
          <CharacterImage img={CHARACTER} />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Login;

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: #000;
`;

const StyledColorBox = styled.div`
  position: relative;

  max-width: 500px;
  width: 100%;
  height: 500px;

  background-color: #fff;

  .bg-color-left {
    width: 40%;
    height: 100%;
    background-color: #ebd1de;
  }
`;

const StyledOverlayText = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 1.8rem;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 300px;

  font-size: 1.5rem;

  border: none;
  border-bottom: 3px black solid;

  padding: 0 0 0.5rem 1rem;

  background-color: transparent;

  &::placeholder {
    color: #a8aaad;
  }

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 300px;
  height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;

  border: none;
  border-radius: 50px;

  font-weight: 700;
  font-size: 1.2rem;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover {
    background-color: #e3e5e8;
  }
  &:active {
    opacity: 50%;
  }
`;

const CharacterImage = styled.div`
  width: 180px;
  height: 260px;

  position: absolute;
  bottom: 0;
  right: 0;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: -1;
`;
