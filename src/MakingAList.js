import { useState } from "react";
import Input from "./Input";
import { CypherEncoder } from "./SantaCypher";
import styled from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";

const MakingAList = ({ toggled }) => {
  const [giftGivers, setGiftGivers] = useState([
    { order: 0, giver: "", givee: "" },
    { order: 1, giver: "", givee: "" },
    { order: 2, giver: "", givee: "" },
    { order: 3, giver: "", givee: "" },
  ]);

  const [hiddenList, setHiddenList] = useState(false);

  

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
    setHiddenList(true);
  };

  return (
    <>
      {toggled && (
        <Container>
          <NamesBox>
            <Names>
              {giftGivers.map((gg, index) => (
                <Input index={index} handleChange={handleChange} />
              ))}
            </Names>
            <XIcon onClick={() => removeGiftGiver()}>
              <FiX />
            </XIcon>
          </NamesBox>
          <PlusBox>
            <PlusIcon
              onClick={() => {
                setGiftGivers([
                  ...giftGivers,
                  { order: giftGivers.length, giver: "", givee: "" },
                ]);
              }}
            >
              <FiPlus />
            </PlusIcon>
          </PlusBox>
          <ShuffleButton disabled={giftGivers.some(giver => giver.giver === "")} onClick={() => shuffle()}>Shuffle Names</ShuffleButton>
          <Results>
            {hiddenList &&
              giftGivers.map((person) => (
                <>
                  <Giver>{person.giver} gives to...</Giver>
                  <Givee>{person.givee}</Givee>
                </>
              ))}
          </Results>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NamesBox = styled.div`
  display: flex;
  position: relative;
`;

const PlusIcon = styled.div`
  font-size: 1.8rem;
  color: darkgreen;

  &:hover {
    color: darkred;
  }
`;

const PlusBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const XIcon = styled.div`
  align-self: end;
  font-size: 1.8rem;

  position: absolute;
  right: -5px;
  display: flex;

  color: darkgreen;

  &:hover {
    color: darkred;
  }
`;

const ShuffleButton = styled.button`
  align-self: center;
  width: fit-content;
  font-size: 1.7rem;
  font-family: "Mountains of Christmas", cursive;
  color: white;
  background: darkgreen;
  padding: 0.5rem 1.5rem;
  border-radius: 15%;
  border: 5px dashed white;

  &:hover {
    background: darkred;
  }

  &:active {
    border: 5px dashed darkgreen;
  }
`;

const Results = styled.div``;

const Giver = styled.div`
  margin-top: 1.3rem;
  font-weight: bold;
  font-size: 1.2rem;
`;
const Givee = styled.div``;
export default MakingAList;
