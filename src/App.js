import Start from "./components/Start";
import Game from "./components/Game";
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Result from "./components/Result";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/game" element={<Game />}/>
            <Route path='/result' element={<Result/>}/>
        </Routes>

    );

}

export default App;


