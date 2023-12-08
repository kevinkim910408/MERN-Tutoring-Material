import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledPage>
        <StyledColorBox>
          <StyledColorAllocationDiv></StyledColorAllocationDiv>
          <StyledOverlayText>
            <div>Fortnite Crew Recruitment</div>
            <StyledInput placeholder="Fortnite ID"></StyledInput>
            <StyledInput placeholder="Main Weapon"></StyledInput>
            <StyledInput placeholder="Rank"></StyledInput>
            <StyledInput placeholder="Crew Preference"></StyledInput>
            <StyledButton>Submit</StyledButton>
          </StyledOverlayText>
        </StyledColorBox>
      </StyledPage>
    </>
  );
};

export default Home;

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const StyledColorBox = styled.div`
  position: absolute;
  z-index: -1;

  width: 40%;
  height: 90%;
  /* border: 1px black solid; */
  border-radius: 20px;
  background-color: #f3f3f3;
`;

const StyledColorAllocationDiv = styled.div`
  width: 40%;
  background-color: #d1ebe9;
  /* border: 1px black solid; */
  border-right: none;
  border-radius: 20px 0 0 20px;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const StyledOverlayText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 1.25em 3em;

  height: 90%;

  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px black solid;
  background-color: transparent;
`;

const StyledButton = styled.button`
  padding: 1em;
  background-color: white;
  border: none;
  border-radius: 10%;
`;
