import { useState } from "react";
import { CypherDecoder } from "./SantaCypher";
import styled from "styled-components";

const CheckingItTwice = ({ toggled }) => {
  const [who, setWho] = useState();

  console.log(CypherDecoder('IUKQZCEMZOQEYUFGXQGBQTBTBTB'))
  const handleChange = (event) => {
    setWho(event.target.value);
  };

  return (
    <>
      {!toggled && (
        <Container>
          <Border>
            <StyledInput onChange={(ev) => handleChange(ev)} />
          </Border>
          <button
            onClick={() => {
              window.alert(`You got ${CypherDecoder(who)}`);
            }}
          >
            Who'd you get?
          </button>
          
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
export default CheckingItTwice;
