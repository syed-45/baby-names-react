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
  const [babyNames, setbabyNames] = useState<babyObjType[]>(babyNamesData);
  const [favesList, setFavesList] = useState<babyObjType[]>([]);

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

  function MapToDiv(babyObj: babyObjType): JSX.Element {
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
      <p>faves list: </p>
      {favesList.map(MapToDiv)}

      <div style={{ height: "0", flexBasis: "100%" }}></div>
      <input
        value={inputText}
        width="20px"
        onChange={(event) => {
          setInputText(event.target.value);
          setbabyNames(
            babyNamesData.filter((babyObj: babyObjType): boolean => {
              return babyObj.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            })
          );
        }}
      />
      <div style={{ height: "0", flexBasis: "100%" }}></div>

      {babyNames
        .filter((babyObj) => !favesList.includes(babyObj))
        .map(MapToDiv)}
    </>
  );
}

export default NamesBlock;
