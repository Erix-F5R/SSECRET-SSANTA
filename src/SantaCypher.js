//I'm implementing a basic Caesar Cypher that shifts the alphabet by 12 (...days of xmas)
export const CypherEncoder = (name) => {

//The names are padded with random holiday words to obscure the length of the name
  const xmasDictionary = [
    "HOHOHO",
    "MRSCLAUS",
    "VIXEN",
    "PRANCER",
    "FROSTY",
    "ELF",
    "RUDOLPH",
    "MISTLETOE",
  ];

  const xmasWord = () => {
    return xmasDictionary.splice(
      Math.floor(Math.random() * xmasDictionary.length),
      1
    );
  };

  const Shift = (char) => {
    const shift = 12;
    const start = 65;
    const end = 90;

    let value = char.charCodeAt(0) + shift;

    if (value > end) {
      value = (value % end) + start;
    }

    return String.fromCharCode(value);
  };

  let encodedName = name.toUpperCase();

  encodedName = xmasWord() + xmasWord() + encodedName + xmasWord()  + `${Math.floor(Math.random() * 2) === 0 ? xmasWord() : ''}`;

  const code = encodedName.split("").map((char) => Shift(char));

  return code.join("");
};

export const CypherDecoder = (code) => {
  
  const xmasDictionary = [
    "HOHOHO",
    "MRSCLAUS",
    "VIXEN",
    "PRANCER",
    "FROSTY",
    "ELF",
    "RUDOLF",
    "MISTLETOE",
  ];

  const UnShift = (char) => {
    const shift = 12;
    const start = 65;
    const end = 90;

    let value = char.charCodeAt(0) - shift;

    if (value < start) {
      value = -(start % value) + end;
    }

    return String.fromCharCode(value);
  };

  let name = code
    .split("")
    .map((char) => UnShift(char))
    .join("");

  xmasDictionary.forEach((word) => (name = name.replace(word, "")));

  return name;
};
