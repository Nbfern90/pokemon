import{useState} from 'react'




const Pokemon = () => {

const [state,setState]=useState(0
)

const clickHandler = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response => setState({pokemon: response.results}))
    .catch(error => console.log(error))
    console.log(state.pokemon)

}


  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
      {state.pokemon ? state.pokemon.map((i,index)=>{
        return <div key={index}>{i.name}</div>
      }):null}
  

      {/* { (state) ? state.map((pokemon, id) => <li key={id}>{pokemon.name}</li>): <h1>Click the button</h1>}
   
      
        */}
          
       
     
  
    </div>
  )
}

export default Pokemon
