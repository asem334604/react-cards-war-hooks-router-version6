import newCardDeck from "../utils/NewCardDeck";
import RandomNumber from "../utils/RandomNumber";
import './style.css';

import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


const Game = () => {
        const navigate = useNavigate();

        const gamesStore = sessionStorage.getItem('games');
        const winsStore = sessionStorage.getItem('wins');
        const lossesStore = sessionStorage.getItem('losses');

        const [playerDeal, setPlayerDeal] = useState([]);
        const [compDeal, setCompDeal] = useState([]);
        const [playerTakes, setPlayerTakes] = useState(0);
        const [compTakes, setCompTakes] = useState(0);
        const [games, setGames] = useState(gamesStore ? JSON.parse(gamesStore) : 0);
        const [wins, setWins] = useState(winsStore ? JSON.parse(winsStore) : 0);
        const [losses, setLosses] = useState(lossesStore ? JSON.parse(lossesStore) : 0);
        const [isGameEnded, setIsGameEnded] = useState(false);
        const [moveNum, setMoveNum] = useState(1);


        const updSessionStore = (storeName, item) => {
            sessionStorage.removeItem(storeName);
            sessionStorage.setItem(storeName, JSON.stringify(item));
        }

        useEffect(() => {
            let pArr = [], cArr = [], newDeck = newCardDeck();
            if (newDeck) {
                while (newDeck.length > 26) {
                    let cardPos = RandomNumber(newDeck.length);
                    pArr.push(newDeck[cardPos]);
                    newDeck.splice(cardPos, 1);
                }
                while (newDeck.length > 0) {
                    let cardPos = RandomNumber(newDeck.length);
                    cArr.push(newDeck[cardPos]);
                    newDeck.splice(cardPos, 1);
                }
            }
            setPlayerDeal(pArr);
            setCompDeal(cArr);
        }, []);


        const handleNextMove = () => {
            let playerTakesNow = 0, compTakesNow = 0;

            if (compDeal.length > 1 || playerDeal.length > 1) {

                (compDeal[0] < playerDeal[0]) ? playerTakesNow++ : compTakesNow++;
                let compArr = [...compDeal], playerArr = [...playerDeal];
                compArr.splice(0, 1);
                playerArr.splice(0, 1);
                setPlayerTakes(prevPlayerTakes => prevPlayerTakes + playerTakesNow);
                setCompTakes(prevCompTakes => prevCompTakes + compTakesNow);
                setCompDeal(compArr);
                setPlayerDeal(playerArr);
                setMoveNum(26-compArr.length+2);
                navigate(`/game/move/${moveNum}`);
            } else if (compDeal.length <= 1 || playerDeal.length <= 1) {
                let winsNow = 0, lossesNow = 0;
                if (playerTakes > compTakes) {
                    winsNow++
                    setGames(prevState => prevState + 1);
                    setWins(prevState => prevState + winsNow);
                } else {
                    lossesNow++;
                    setGames(prevState => prevState + 1);
                    setLosses(prevState => prevState + lossesNow)
                }
                setIsGameEnded(true);
            }
        }


        useEffect(() => {
            updSessionStore('games', games);
            updSessionStore('wins', wins);
            updSessionStore('losses', losses);
        }, [wins, losses, games]);



        if (isGameEnded) {
            navigate('/result');
        } else {
            return <div className={'container'}>
                <h2>COMPUTER</h2>
                <div className="card">{compDeal[0]}</div>
                <div className="card">{playerDeal[0]}</div>
                <h2>YOU</h2>
                <button className={'btn'} onClick={handleNextMove}>Next</button>
            </div>
        }
    }
;

export default Game;

