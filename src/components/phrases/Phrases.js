//Phrases.js------------------
// Show Phrases

import React from 'react';

import './Phrases.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  { ShowCurrentPhrases } from "../showCurrentPhrases/ShowCurrentPhrases.js";

let showHidePhrases             = null;

let showCurrentPhrasesWork      = null;

let currentPhrases              = null;

let currentPhrasesServer        = null;

let phrases_wrapper_visibility  = null;


export function Phrases() {
console.log('Phrases +++++++++++')     

    showHidePhrases = useSelector((store) => store.showHidePhrases);

    currentPhrases = useSelector((store) => store.currentPhrases);

    phrases_wrapper_visibility = useSelector((store) => store.phrases_wrapper_visibility);

    let dispatch = useDispatch();
    
    if(currentPhrases !== null) {
        currentPhrasesServer = '/get' + currentPhrases;
    } else currentPhrasesServer = '/home';


console.log('Phrases: currentPhrases=',currentPhrases);
console.log('Phrases: currentPhrasesServer=',currentPhrasesServer);



    useEffect(() => {
        fetch(currentPhrasesServer)
        .then(response => response.json())
        .then(phrases => {
            dispatch({type: 'ShowCurrentPhrases', 
            payload: {
                phrases: phrases
            }
            })

        })
    });

console.log('Phrases: showHidePhrases=',showHidePhrases);     
console.log('Phrases: showCurrentPhrasesWork=',showCurrentPhrasesWork);

    if(showHidePhrases) showCurrentPhrasesWork = <ShowCurrentPhrases />
    else  showCurrentPhrasesWork = null;

    return <section id="phrases_wrapper" style={phrases_wrapper_visibility}>

        {showCurrentPhrasesWork}

    </section>    
}//end of Phrases.js

