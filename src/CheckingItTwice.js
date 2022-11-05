import { useState } from "react";
import { CypherDecoder } from "./SantaCypher";
import styled from "styled-components";

const CheckingItTwice = ({ toggled }) => {
  const [who, setWho] = useState();

  const [decoded, setDecoded] = useState();

  const handleChange = (event) => {
    setWho(event.target.value);
  };

  return (
    <>
      {!toggled && (
        <Container>
          <Border>
            <StyledInput onChange={(ev) => handleChange(ev)} placeholder='Enter your code here...'/>
          </Border>
          <Button
            onClick={() => {
              setDecoded(CypherDecoder(who))
            }}
            
          >
            Who'd you get?
          </Button>
          {decoded && <ResultBox>You better find out if... <br/> <Span>{decoded}</Span> <br/> ...was naughty or nice</ResultBox>}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
margin: 2rem;
  align-self: center;
  width: fit-content;
  font-size: 1.7rem;
  font-family: "Mountains of Christmas", cursive;
  color:white;
  background: darkred;
  padding: 0.5rem 1.5rem;
  border-radius: 15%;
  border: 5px dashed white;

  &:hover{
    background: darkgreen;
  }

  &:active{
    border: 5px dashed darkred;
  }

`;

const StyledInput = styled.input`
  padding: 0.3rem;
  border: none;
  background: none;
  flex-grow: 1;
  font-weight: bold;
  font-family: "Mountains of Christmas", cursive;
`;
const Border = styled.div`
  border: double 4px transparent;
  border-radius: 9px;
  background-image: linear-gradient(white, white),
    repeating-linear-gradient(45deg, red, red 5px, green 5px, green 25px);
  background-origin: border-box;
  background-clip: content-box, border-box;

  margin-bottom: 0.2rem;

  display: flex;
`;

const ResultBox = styled.div`
  color: white;
  font-size: 2rem;
  margin: 2rem;
  padding: 1rem;
  background: darkgreen;
  border: dotted white 10px;
  border-radius: 3rem;
`;

const Span = styled.span`
  padding-left: 3rem;
`;
export default CheckingItTwice;
