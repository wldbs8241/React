import React from "react";
import SearchComponent from "../components/SearchComponent";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid gray;
`

const Home = () => {
  return (
    <Container>
      <SearchComponent />
      <h3>Clone Coding</h3>
    </Container>
  );
};

export default Home;
