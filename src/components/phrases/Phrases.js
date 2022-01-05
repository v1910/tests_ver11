//Phrases.js------------------
// Show Phrases

import React from 'react';

import './Phrases.css';

import { useSelector } from 'react-redux';

import  { ShowCurrentPhrases } from "../showCurrentPhrases/ShowCurrentPhrases.js";

let showHidePhrases        = null;

let showCurrentPhrasesWork = null;

export function Phrases() {
console.log('Phrases +++++++++++')     

    showHidePhrases = useSelector((store) => store.showHidePhrases);

console.log('Phrases: showHidePhrases=',showHidePhrases)     

    if(showHidePhrases) showCurrentPhrasesWork = <ShowCurrentPhrases />; 

    return <section id="phrases_wrapper">

        {showCurrentPhrasesWork}

    </section>    
}//end of Phrases.js

