import React from "react";
import CHARACTER from "../assets/recruitbg.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  StyledPage,
  StyledColorBox,
  StyledOverlayText,
  StyledInput,
  CharacterImage,
  StyledButton,
} from "./style";

const getServerData = async () => {
  const data = await fetch("http://localhost:8080/api/user/getAllUsers").then(
    (response) => response.json()
  );
  return data;
};

const fetchData = async () => {
  const response = await axios.get(
    `http://localhost:8080/api/user/getAllUsers`
  );
  return response.data;
};

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["uniqueQueryKey"],
    queryFn: fetchData,
  });

  console.log(data);

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
