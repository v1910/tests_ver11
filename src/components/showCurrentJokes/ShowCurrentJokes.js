//ShowCurrentJokes.js: show Jokes

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

import './ShowCurrentJokes.css';



//let currentPhrases     = null;

let jokes_all            = null;

export function ShowCurrentJokes() {  //---------------------------------------

//console.log('ShowCurrentJokes +++++++++++')  

  // Transform html-text into text
  const renderHTML =  (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML }});//----------    

  let workJokes   = [];

  jokes_all = useSelector((store) => store.jokes);

  let showHideJokes = useSelector((store) => store.showHideJokes);
  

//console.log('ShowCurrentPhrases jokes_all=',jokes_all)           
//console.log('ShowCurrentPhrases jokes_all.length=',jokes_all.length)  
 
  for(let i=0; i < jokes_all.length; i++){
    
//console.log('ShowCurrentPhrases el=',el)  

    workJokes.push(<div class="jokes_topic" key={i}>{jokes_all[i].name}</div>);

    for(let k=0; k < jokes_all[i].phrases.length; k++){

      workJokes.push(<div class="jokes_doc" key={k}>{renderHTML(jokes_all[i].phrases[k])}</div>);

//console.log('ShowCurrentPhrases workPhrases=',workPhrases)

  //console.log('ShowCurrentPhrases result=',result)         

    };//for
  
  }//for


  if(showHideJokes) {
    window.location.hash = 'jokes_wrapper';
  }

  return workJokes;

  
}//---end of ShowCurrentJokes
