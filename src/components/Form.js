import React, { useState } from 'react';

function Form({addObject}) {

    const [characterName, setCharacterName]=useState("")
    const [characterImage, setCharacterImage]=useState("")
    const [characterVotes, setCharacterVotes]= useState(0)

    //function to update a character's name
    function handleNameChange(event){
        setCharacterName(event.target.value)
    }
        
    //function to update a character's image
    function handleImageChange(event){
        setCharacterImage(event.target.value)
    }

        
    //function to update a character's votes
    function handleVotesChange(event){
        setCharacterVotes(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()

        let newObject={
            id: Date.now(),
            name: characterName,
            image: characterImage,
            votes: characterVotes
        }

        addObject(newObject)
        setCharacterName("")
        setCharacterImage("")
        setCharacterVotes(0)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={characterName}  onChange={handleNameChange} placeholder="Add a name"/>
                <input type="url" value={characterImage} onChange={handleImageChange} placeholder="Add image url"/>
                <input type="number" value={characterVotes} onChange={handleVotesChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;