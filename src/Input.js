import styled from "styled-components";

const Input = ({ index, handleChange }) => {
  return (
    <>
      
      <Border>
        <StyledInput onChange={(event) => handleChange(index, event)} />
      </Border>
    </>
  );
};

const StyledInput = styled.input`
  width: 85%;
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
  repeating-linear-gradient(
      45deg,
      red,
      red 5px,
      green 5px,
      green 25px
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  margin-bottom: 0.2rem;
  width: 85%;

  display: flex;



`;

export default Input;
