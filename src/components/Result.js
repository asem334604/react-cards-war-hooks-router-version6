import React, {useEffect, useState} from 'react';
import Game from "./Game";
import './style.css';


const Result = (props) => {

    const [newGame, setNewGame] = useState(false);
    const [gamesStat, setGamesStat] = useState(sessionStorage.getItem('games'));
    const [winsStat, setWinsStat] = useState(sessionStorage.getItem('wins'));
    const [lossesStat, setLossesStat] = useState(sessionStorage.getItem('losses'));

    // useEffect(() =>
    //     setNewGame(false)
    // ,[]);

    const handleNewGame = () => {
        setNewGame(true);
    }
console.log('result component');
    return (
        newGame ? (
            <Game/>
        ) : (
            <div className={'container'}>
                <h3>Games: {gamesStat}</h3>
                <h3>LOSE/WIN</h3>
                <h3>{lossesStat} - {winsStat}</h3>
                <button onClick={handleNewGame} className={'btn'}>Again?</button>
            </div>
        )
    );
};

export default Result;
