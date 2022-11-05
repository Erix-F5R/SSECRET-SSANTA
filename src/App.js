import React, { useState } from "react";
import CheckingItTwice from "./CheckingItTwice";
import MakingAList from "./MakingAList";
import styled from "styled-components";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (whichDidIClick) => {

    whichDidIClick? setToggle(true):setToggle(false);

  };

  return (
    <>
      <Screen>
        <Container>
          <Title>SSECRET SSANTA</Title>
          <Toggle>
            <Page underline={toggle} onClick={() => {handleToggle(true)} }>Make A List</Page>
            <Page underline={!toggle} onClick={() => {handleToggle(false)} }>Check It Twice</Page>
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
  border-radius: 30px;
  display: flex;
  flex-direction: column;

`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  align-self: center;
  color: darkgreen;

`;

const Toggle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Page = styled.a`
  color: darkred;
  font-size: 1.3rem;

  transition: 0.2s;
  text-decoration: ${props => props.underline ? 'underline wavy darkgreen': 'none'};


  &:hover {
    color: darkgreen;
  }
`;

export default App;
