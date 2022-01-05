//ShowCurrentPhrases.js: show Phrases

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';


import './ShowCurrentPhrases.css';



let currentPhrases                               = null;


export function ShowCurrentPhrases() {  //---------------------------------------

console.log('ShowCurrentPhrases +++++++++++')     

  

//  currentPhrases                          = useSelector((store) => store.currentAudio);
 

  let dispatch = useDispatch();  

  return null;

  
}//---end of ShowCurrentPhrases
