import { useState } from "react";
import babyNamesData from "../baby-names.json";

interface babyObj {
  id: number;
  name: string;
  sex: string;
}

babyNamesData.sort(function (a, b) {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();
  return textA < textB ? -1 : textA > textB ? 1 : 0;
});

const blockStyleBoys = {
  backgroundColor: "lightblue",
  alignItems: "center",
  marginTop: "8px",
  marginRight: "8px",
  borderRadius: "3px",
};

const blockStyleGirls = {
  backgroundColor: "lightpink",
  alignItems: "center",
  marginTop: "8px",
  marginRight: "8px",
  borderRadius: "3px",
};

function NamesBlock(): JSX.Element {
  const [inputText, setInputText] = useState<string>("");
  const [babyNamesState, setBabyNamesState] =
    useState<babyObj[]>(babyNamesData);

  return (
    <>
      <input
        value={inputText}
        width="20px"
        onChange={(event) => {
          setInputText(event.target.value);
          setBabyNamesState(
            babyNamesData.filter((obj: babyObj): boolean => {
              return obj.name.toLowerCase().includes(event.target.value);
            })
          );
        }}
      />
      <div style={{ height: "0", flexBasis: "100%" }}></div>

      {babyNamesState.map((obj) => {
        if (obj.sex === "m") {
          return (
            <div key={obj.id} style={blockStyleBoys}>
              {obj.name}
            </div>
          );
        } else {
          return (
            <div key={obj.id} style={blockStyleGirls}>
              {obj.name}
            </div>
          );
        }
      })}
    </>
  );
}

export default NamesBlock;

//create useState arrays for just name data
//filter babyNames with input text, put in new state
//if no input => show all babyNames
