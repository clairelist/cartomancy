import React, {useState} from 'react';
import cards from './data/cards';
//the fortune function will return a random fortune in this array!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
}

  function eightBall2(array) {
      let fortune = array[getRandomInt(0,array.length)];
      return fortune;
}

const FortuneGetter=()=>{
    //DATA section:: needful | initialize state as array of fortunes
    const [fortune,setFortune] = useState([]);
    //instead, we will change it to find a random color, suit, and card ! Thus, we need to hold each in state seperately -- TODO for manyanr Claire

    //logic will look something like : invoke eightBall2, then set the returned index as our state, then display that in component

    const handleClick=()=>{
       setFortune(eightBall2(cards));
    }

    return(
        <div className='fortune'>
            <h1>
        This is a fortune-telling machine. Please treat it with the respect it deserves.
           </h1>
            <span id='click-me' onClick={handleClick}>Click me to get a new fortune!</span>
            <h2>The Machine Says:</h2>
            <p>{fortune}</p>
            {fortune && <p>Dang, the machine doesn't like you very much at all today!</p>}
        </div>
    )
}

export default FortuneGetter;