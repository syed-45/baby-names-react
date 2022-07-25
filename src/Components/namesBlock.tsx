import babyNames from '../baby-names.json' 
// import namesBlock

babyNames.sort(function(a, b) {
  const textA = a.name.toUpperCase();
  const textB = b.name.toUpperCase();
return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
})

for (let i = 0; i < 10; i++) {    
  console.log(babyNames[i].name)
}


function NamesBlock(): JSX.Element{
    return(
        <>
        </>
    )
}

export default NamesBlock