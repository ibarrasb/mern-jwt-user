import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState'

function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [name] = state.userAPI.name
    console.log(name)
   

    return (
        <div>
            <h1> {isLogged ? `Welcome ${name}` : 'Home'}</h1>
        </div>
    );
}

export default Home;