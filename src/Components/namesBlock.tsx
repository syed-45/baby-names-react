import babyNamesData from "../baby-names.json";

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
  borderRadius: '3px'  
};
const blockStyleGirls = {
  backgroundColor: "lightpink",
  alignItems: "center",
  marginTop: "8px",
  marginRight: "8px",
  borderRadius: '3px'  
};

const babyNames:JSX.Element[] = []
for (let i = 0; i < babyNamesData.length; i++) {
  if (babyNamesData[i].sex==='m') {
    babyNames.push(<div style={blockStyleBoys}>{babyNamesData[i].name}</div>);
  } else {
    babyNames.push(<div style={blockStyleGirls}>{babyNamesData[i].name}</div>);
  }
}

function NamesBlock(): JSX.Element {  
  
  return (
    <>
      {babyNames}
    </>
  );
}


export default NamesBlock;
