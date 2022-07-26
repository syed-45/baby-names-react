import NamesBlock from "./Components/namesBlock";


function App(): JSX.Element {
  return (
    <main style={{border: '5px green solid', width:'80%', height:'300px', display:'flex',
     flexDirection:'row', alignItems:'start', justifyContent:'space-evenly',marginLeft:'auto', marginRight:'auto'}}>
      <NamesBlock
        {...['hey','str']}
      />
    </main>
  )
}

export default App;
