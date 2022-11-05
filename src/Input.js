import styled from "styled-components";

const Input = ({ index, handleChange }) => {

  return (
    <>
      
      <Border ribbon={index%2 === 0}>
        <StyledInput  onChange={(event) => handleChange(index, event)} placeholder="Add a participant..."/>
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
      ${props => props.ribbon ? 'red': 'green'},
      ${props => props.ribbon ? 'red': 'green'} 5px,
      ${props => props.ribbon ? 'green': '#c40000'} 5px,
      ${props => props.ribbon ? 'green': '#c40000'} 25px
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  margin-bottom: 0.2rem;
  width: 85%;

  display: flex;



`;

export default Input;
