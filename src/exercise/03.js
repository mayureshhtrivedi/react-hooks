// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal({animal,OnAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={OnAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
 function Display({animal}) {
   return <div>{`Hey, your favorite animal is: ${animal}!`}</div>
 }


function App() {
  // 🐨 add a useState for the animal
  const [animal, setAnimal] = React.useState('')
 
  return (
    <form>
      <Name  />
      <FavoriteAnimal animal={animal} OnAnimalChange={event => setAnimal(event.target.value)} />
      <Display animal={animal}/>
    </form>
  )
}

export default App
