//Listen.js------------------

import React from 'react';

import { useSelector } from 'react-redux';

import './Listen.css';

import  { ShowCurrentListen } from "../showCurrentListen/ShowCurrentListen.js";

let showHideListen        = null;

let showCurrentListenWork = null;


export function Listen() {

    showHideListen = useSelector((store) => store.showHideListen);

    if(showHideListen) showCurrentListenWork = <ShowCurrentListen />; 

    return <section id="listen_wrapper">

        {showCurrentListenWork}

    </section>
}//end of Listen.js
