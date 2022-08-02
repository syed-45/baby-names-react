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


function NamesBlock(): JSX.Element {
  const [inputText, setInputText] = useState<string>("");
  const [babyNames, setbabyNames] =
    useState<babyObj[]>(babyNamesData);

  return (
    <>
      <input
        value={inputText}
        width="20px"
        onChange={(event) => {
          setInputText(event.target.value);
          setbabyNames(
            babyNamesData.filter((obj: babyObj): boolean => {
              return obj.name.toLowerCase().includes(event.target.value.toLowerCase());
            })
          );
        }}
      />
      <div style={{ height: "0", flexBasis: "100%" }}></div>

      {babyNames.map((obj) => {
        if (obj.sex === "m") {
          return (
            <div key={obj.id} className="babyBlockStyle">
              {obj.name}
            </div>
          );
        } else {
          return (
            <div key={obj.id} className="babyBlockStyle" style={{backgroundColor:'lightpink'}}>
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
