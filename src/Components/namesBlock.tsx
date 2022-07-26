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



function NamesBlock(names: string[]): JSX.Element{
    const blockStyle={backgroundColor:'lightblue',alignItems:'center',
    marginTop:'5px'
    }
    return(
        <>
            
            <div style={blockStyle}>HEllo</div>
            <div style={blockStyle}>Hi</div>
            <div style={blockStyle}>Hi again</div>
        </>
    )
}

export default NamesBlock