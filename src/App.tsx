import NamesBlock from "./Components/namesBlock";
import "./Components/App.css"

function App(): JSX.Element {
  return (
    <main
      style={{
        border: "5px grey solid",
        width: "80%",
        height: "300px",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "start",
        justifyContent: "space-evenly",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "40px",
        overflow: "auto",
      }}
    >
      <NamesBlock />
    </main>
  );
}

export default App;
