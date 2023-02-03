import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faRefresh } from '@fortawesome/free-solid-svg-icons'


function Character({currentObject, handleLike, handleDislike, handleReset}) {
    return (
        <div key={currentObject.id} className="item">
            <img src={currentObject.image} alt="image"/>
            <h2>{currentObject.name}</h2>
            <p>{currentObject.votes} Votes</p>
            <div className='buttons'>
            <button onClick={()=>{handleLike(currentObject)}} id="like"><FontAwesomeIcon icon={faThumbsUp} size="xl"/> Like</button>
            <button onClick={()=>{handleDislike(currentObject)}} id="dislike"> <FontAwesomeIcon icon={faThumbsDown} size="xl"/> Dislike</button>
            <button onClick={()=>{handleReset(currentObject)}} id="reset"> <FontAwesomeIcon icon={faRefresh} size="xl"/> Reset</button>

            </div>
            
            

            
        </div>
    );
}

export default Character;