import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 50px;
  border: 1px solid #03c75a;
  border-radius: 33px;
  background-color: #fff;
`;

const Input = styled.div`
  display: flex;
`;
const LogoN = styled.img`
  width: 30px;
  height: 30px;
`;
const SearchComponent = () => {
  return (
    <Container>
      <SearchBox>
        <Input>
          <LogoN src="./public/N.png" />
        </Input>
      </SearchBox>
    </Container>
  );
};

export default SearchComponent;
