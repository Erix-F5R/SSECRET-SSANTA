import { useState } from "react";
import Input from "./Input";
import { CypherEncoder } from "./SantaCypher";
import styled from "styled-components";

const MakingAList = () => {
  const [giftGivers, setGiftGivers] = useState([
    { order: 0, giver: "", givee: "" },
    { order: 1, giver: "", givee: "" },
    { order: 2, giver: "", givee: "" },
  ]);

  const removeGiftGiver = () => {
    const lastIndex = giftGivers.findIndex(
      (obj) => obj.order === giftGivers.length - 1
    );
    const spliced = giftGivers;
    spliced.splice(lastIndex, 1);
    setGiftGivers([...spliced]);
  };

  const handleChange = (index, event) => {
    const changedIndex = giftGivers.findIndex((obj) => obj.order === index);
    const shallowGiftGivers = giftGivers;
    shallowGiftGivers[changedIndex].giver = event.target.value;
    setGiftGivers([...shallowGiftGivers]);
  };

  const shuffle = () => {
    const shallowGG = giftGivers;

    const names = giftGivers.map((obj) => obj.giver);

    for (var i = names.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = names[i];
      names[i] = names[j];
      names[j] = temp;
    }

    names.reduce((p, c) => {
      let index = shallowGG.findIndex((obj) => obj.giver === p);
      shallowGG[index].givee = CypherEncoder(c);
      return c;
    }, names[names.length - 1]);

    setGiftGivers([...shallowGG]);
  };

  return (
    <Container>
      Making A List
      <NamesBox>
      <Names>
      {giftGivers.map((gg, index) => (
        <Input index={index} handleChange={handleChange} />
      ))}
      </Names>
      <XIcon onClick={() => removeGiftGiver()}>X</XIcon>
      </NamesBox>
      <a
        onClick={() => {
          setGiftGivers([
            ...giftGivers,
            { order: giftGivers.length, giver: "", givee: "" },
          ]);
        }}
      >
        +
      </a>
      <a onClick={() => shuffle()}>Shuffle</a>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
`;

const Names = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
`;

const NamesBox = styled.div`
    display: flex;
    border: 1px solid green;
`;


const XIcon = styled.a`
    align-self: end;
`
export default MakingAList;
