import Start from "./components/Start";
import Game from "./components/Game";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Result from "./components/Result";
import NotFound from "./components/NotFound";

const App = () => {

    return (
        <Routes>
            {
                ['/','start'].map(path=>
                <Route path={path} key={path} element={<Start/>}/> )
            }
            <Route path="/" element={<Start/>}/>
            <Route path="game">
                <Route path="move/:move_num" element={<Game/>}/>
            </Route>
            <Route path='result' element={<Result/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );

}

export default App;


