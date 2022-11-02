import styled from "styled-components";

const Input = ({index,  handleChange}) => {
  return (
    <>
      <StyledInput onChange={(event) => handleChange(index,event)}/>

    </>
  );
};

const StyledInput = styled.input`
    width: 300px;
`

 

export default Input;
