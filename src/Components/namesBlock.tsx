import { useState } from "react";
import babyNamesData from "../baby-names.json";
// import Favourites from "./favouritesList";

export interface babyObjType {
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
  const [babyNames, setBabyNames] = useState<babyObjType[]>(babyNamesData);
  const [favesList, setFavesList] = useState<babyObjType[]>([]);
  const [gender, setGender] = useState("both");

  const handleBabyNameClick = (babyObj: babyObjType): void => {
    if (favesList.includes(babyObj)) {
      const mathchingIndex = favesList.findIndex((fave) => fave === babyObj);
      const newFaves = [...favesList];
      newFaves.splice(mathchingIndex, 1);
      setFavesList(newFaves);
      // console.log(newFaves)
    } else {
      setFavesList([...favesList, babyObj]);
    }
  };
  
  function mapToDiv(babyObj: babyObjType): JSX.Element {
    if (babyObj.sex === "m") {
      return (
        <div
          key={babyObj.id}
          className="babyBlockStyle"
          onClick={() => handleBabyNameClick(babyObj)}
        >
          {babyObj.name}
        </div>
      );
    } else {
      return (
        <div
          key={babyObj.id}
          className="babyBlockStyle"
          style={{ backgroundColor: "lightpink" }}
          onClick={() => handleBabyNameClick(babyObj)}
        >
          {babyObj.name}
        </div>
      );
    }
  }

  return (
    <>
      <input
        value={inputText}
        width="20px"
        onChange={(event) => {
          setInputText(event.target.value);
          setBabyNames(
            babyNamesData.filter((babyObj: babyObjType): boolean => {
              return (
                babyObj.name
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase()) &&
                babyObj.sex === gender
              );
            })
          );
        }}
      />
      <button onClick={() => setGender("both")}>BOTH</button>
      <button onClick={() => setGender("m")}>M</button>
      <button onClick={() => setGender("f")}>F</button>
      <div style={{ height: "0", flexBasis: "100%" }}></div>
      <p>faves list: </p>
      {favesList.map(mapToDiv)}
      <div style={{ height: "0", flexBasis: "100%" }}></div>
      {babyNames
        .filter((babyObj) => {
          if (gender === "both") {
            return !favesList.includes(babyObj);
          }
          return !favesList.includes(babyObj) && babyObj.sex === gender;
        })
        .map(mapToDiv)}
    </>
  );
}

export default NamesBlock;
