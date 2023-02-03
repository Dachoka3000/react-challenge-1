import { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import Form from './components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons'


function App() {


  //const characters=[]
  //const current
  let initialObject={
    name:"Click on a name",
    image:"https://media.istockphoto.com/id/1226476839/photo/cat-head-colorful-illustration-art.jpg?b=1&s=612x612&w=0&k=20&c=2sJgwwV9L5OVwr7kOvvdo8A6GaFsiTu1mHOzsqwJyFk=",
    votes:"Add"
  }

  const [characters, setCharacters]= useState([])
  const [current, setCurrent]= useState(initialObject)
  const [votes, setVotes] = useState(0)
  const [hideForm, setHideForm]= useState(true)

  //FUNCTION TO UPDATE CURRENT CHARACTER
  function handleCurrent(characterObject){
    setCurrent(characterObject)
  }

  //function to add votes
  function handleLike(object){
    let newVotes =object.votes +1

    setVotes(newVotes)

    const thisObject = characters.find(character=> character.id === object.id)
    thisObject.votes = newVotes
    console.log(thisObject)
  }

  //function to decrease votes
  function handleDislike(object){
    let newVotes =object.votes -1

    setVotes(newVotes)

    const thisObject = characters.find(character=> character.id === object.id)
    thisObject.votes = newVotes
    console.log(thisObject)
  }

  //function to reset votes
  function handleReset(object){
    let newVotes = 0

    setVotes(newVotes)

    const thisObject = characters.find(character=> character.id ===object.id)
    thisObject.votes=newVotes
    console.log(thisObject)
  }
  
  //function to add object to array
  function addObject(object){
    let newArray=[...characters, object]

    setCharacters(newArray)
  }
  
 
 // useEffect(functiontorunautomatically, [])
 useEffect(()=>{
  fetch("http://localhost:8001/characters")
  .then(response=> response.json())
  .then(data=>setCharacters(data))
 },[])

  return (
    <div className="App container">
      <CharacterList characters={characters} handleCurrent={handleCurrent}/>
      {hideForm?<button type="button" id='hidebtn' onClick={()=>{setHideForm(s=>!s)}}><FontAwesomeIcon icon={faPlus} size="xl"/> Add Character</button>:<button type="button" id='hidebtn' onClick={()=>{setHideForm(s=>!s)}}>Back to Home <FontAwesomeIcon icon={faArrowRight} size="xl"/></button>}
      {hideForm?<Character currentObject={current} handleLike={handleLike} handleDislike={handleDislike} handleReset={handleReset}/>:<div></div>}
      {hideForm? <div></div>: <Form addObject={addObject}/>}
    </div>
  );
}

export default App;
