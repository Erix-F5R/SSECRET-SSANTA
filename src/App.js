import React, { useState } from "react";
import CheckingItTwice from "./CheckingItTwice";
import MakingAList from "./MakingAList";
import styled from "styled-components";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Screen>
        <Container>
          <Title>SSECRET SSANTA</Title>
          <Toggle>
            <Page onClick={handleToggle}>Make A List</Page>
            <Page onClick={handleToggle}>Check It Twice</Page>
          </Toggle>
          <MakingAList toggled={toggle} />
          <CheckingItTwice toggled={toggle} />
        </Container>
      </Screen>

    </>
  );
}


const Screen = styled.div`
  width: 95vw;
  height: 100%;
  display: flex;
  justify-content: center;

  font-family: "Mountains of Christmas", cursive;


`;

const Container = styled.div`
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  padding: 1rem;
  border: 10px dotted darkgreen;
  display: flex;
  flex-direction: column;

`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  align-self: center;

`;

const Toggle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Page = styled.a`
  color: darkred;
  font-size: 1.3rem;

  &:hover {
    color: darkgreen;
  }
`;

export default App;
