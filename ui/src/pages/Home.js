import React from "react";
import CHARACTER from "../assets/recruitbg.svg";
import {
  StyledPage,
  StyledColorBox,
  StyledOverlayText,
  StyledInput,
  CharacterImage,
  StyledButton,
} from "./style";
import { useGetAllUsers } from "../api/hooks/fetchers";

const Home = () => {
  const getAllUserAPI = useGetAllUsers();

  console.log(getAllUserAPI?.data);

  return (
    <StyledPage>
      <StyledColorBox>
        <div className="bg-color-left" />
        <StyledOverlayText>
          <p>Fortnite Crew Recruitment</p>
          <StyledInput placeholder="Fortnite ID" />
          <StyledInput placeholder="Main Weapon" />
          <StyledInput placeholder="Rank" />
          <StyledInput placeholder="Crew Preference" />
          <StyledButton>Submit</StyledButton>
          <CharacterImage img={CHARACTER} right height="240" />
        </StyledOverlayText>
      </StyledColorBox>
    </StyledPage>
  );
};

export default Home;
