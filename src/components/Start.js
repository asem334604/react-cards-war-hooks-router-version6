import './style.css';

import {useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

const Start = (props) => {
    const navigate = useNavigate();
    const [inputVal, setInputVal] = useState();
    const [fullName, setFullName] = useState();

    const setValue = (e) => {
        return setInputVal(e.target.value);
    }

    const setUser = () => {
        if (inputVal)
            setFullName(inputVal);
        else
            console.log('Full name is not defined');
    }

    useEffect(() => {
        if (fullName) {
            navigate('/game');
        }
    }, [fullName]);

    return (
        <div className={'container'}>
            <h2 className={'start_header'}>Ready for WAR</h2>
            <input className={'start_input'} placeholder={'Enter your name'}
                   type="text" onChange={setValue}/>
            <button className={'btn'} onClick={setUser}>start</button>
        </div>
    );
};

export default Start;

