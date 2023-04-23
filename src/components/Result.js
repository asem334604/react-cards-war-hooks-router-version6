import React, {useState} from 'react';
import './style.css';
import {useNavigate} from "react-router-dom";


const Result = () => {

    const [newGame, setNewGame] = useState(false);
    const [gamesStat, setGamesStat] = useState(sessionStorage.getItem('games'));
    const [winsStat, setWinsStat] = useState(sessionStorage.getItem('wins'));
    const [lossesStat, setLossesStat] = useState(sessionStorage.getItem('losses'));

    const navigate = useNavigate();

    const handleNewGame = () => {
        setNewGame(true);
    }
    console.log('result component');
    if (newGame) {
        navigate('/game/move/1');
    } else
        return (
            <div className={'container'}>
                <h3>Games: {gamesStat}</h3>
                <h3>LOSE/WIN</h3>
                <h3>{lossesStat} - {winsStat}</h3>
                <button onClick={handleNewGame} className={'btn'}>Again?</button>
            </div>
        );
};

export default Result;
