import { useState } from "react";
import { CypherDecoder } from "./SantaCypher";
const CheckingItTwice = () => {

    const [who, setWho] = useState('')
    
    const handleChange = (event) => {
        setWho(event.target.value);
    }

  return (
    <>
      <div>Checking It Twice</div>
      <input onChange={(ev) => handleChange(ev)}/>
      <button onClick={() => { window.alert(`You got ${CypherDecoder(who)}`)}}>Who'd you get?</button>
    </>
  );
};

export default CheckingItTwice;
