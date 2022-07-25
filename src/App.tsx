import babyNames from './baby-names.json' 


babyNames.sort(function(a, b) {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();
return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
})

for (let i = 0; i < 10; i++) {    
  console.log(babyNames[i].name)
}


function App(): JSX.Element {
  return (
    <></>
  )
}

export default App;
