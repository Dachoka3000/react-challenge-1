import React from 'react';

function CharacterList({characters, handleCurrent}) {
    const showCharacters = characters.map((character)=>{
        return  <h1 key={character.id} onClick={()=>{handleCurrent(character)}}>{character.name}</h1>

    })

    return (
        <div className='list'>
            {showCharacters}
        </div>
    );
}

export default CharacterList;