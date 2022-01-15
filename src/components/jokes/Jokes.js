//Jokes.js------------------
// Show Jokes

import React from 'react';

import './Jokes.css';

import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import  { ShowCurrentJokes } from "../showCurrentJokes/ShowCurrentJokes.js";

let showHideJokes        = null;

let showCurrentJokesWork = null;

let currentJokes         = null;

let currentJokesServer   = null;


export function Jokes() {

//console.log('Jokes +++++++++++') 

    showHideJokes = useSelector((store) => store.showHideJokes);

    currentJokes = useSelector((store) => store.currentJokes);

    let dispatch = useDispatch();

    let auto_focus = {name: 'Jokes'};
    
    if(currentJokes !== null) {
        currentJokesServer = '/get' + currentJokes;
    } else currentJokesServer = '/home';


//console.log('Jokes: currentJokes=',currentJokes);
//console.log('Jokes: currentJokesServer=',currentJokesServer);



    useEffect(() => {
        fetch(currentJokesServer)
        .then(response => response.json())
        .then(jokes => {
            dispatch({type: 'ShowCurrentJokes', 
            payload: {
                jokes: jokes
            }
            })

        })
    });

//console.log('Jokes: showHideJokes=',showHideJokes);     
//console.log('Jokes: showCurrentJokesWork=',showCurrentJokesWork);


    if(showHideJokes)  return   <section id="jokes_wrapper">
                                    <ShowCurrentJokes />
                                </section>    
    else               return   <section id="jokes_wrapper" >
                                </section>    

}//end of Jokes.js
