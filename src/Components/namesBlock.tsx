import { useState, useEffect } from "react";
import { JsxAttribute } from "typescript";
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

const babyNamesBlock: JSX.Element[] = [];
for (let i = 0; i < babyNamesData.length; i++) {
  if (babyNamesData[i].sex === "m") {
    babyNamesBlock.push(
      <div key={i} style={blockStyleBoys}>
        {babyNamesData[i].name}
      </div>
    );
  } else {
    babyNamesBlock.push(
      <div key={i} style={blockStyleGirls}>
        {babyNamesData[i].name}
      </div>
    );
  }
}

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
              if (event.target.value) {
                return obj.name.toLowerCase().startsWith(event.target.value);
              }
              return false;
            })
          );
        }}
      />
      <div style={{ height: "0", flexBasis: "100%" }}></div>
      {babyNamesBlock}
      {/* {console.log( [{id:2,name:"bro",sex:"m"},{id:2,name:"hello",sex:"m"}].filter(isTextInNames) )}       */}
      {console.log(babyNamesState)}
    </>
  );
}

export default NamesBlock;

//create useState arrays for just name data
//filter babyNames with input text, put in new state
//if no input => show all babyNames
