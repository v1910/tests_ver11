//ShowCurrentPhrases.js: show Phrases

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

import './ShowCurrentPhrases.css';



//let currentPhrases     = null;

let phrases_all            = null;

export function ShowCurrentPhrases() {  //---------------------------------------

console.log('ShowCurrentPhrases +++++++++++')  

  let workPhrases   = [];

  phrases_all = useSelector((store) => store.phrases);

//console.log('ShowCurrentPhrases phrases_all=',phrases_all)           
//console.log('ShowCurrentPhrases phrases_all.length=',phrases_all.length)           
  
  for(let i=0; i < phrases_all.length; i++){

//console.log('ShowCurrentPhrases el=',el)  

    workPhrases.push(<div class="phrases_topic" key={i}>{phrases_all[i].name}</div>);

    for(let k=0; k < phrases_all[i].phrases.length; k++){

      workPhrases.push(<div class="phrases_doc" key={k}>{phrases_all[i].phrases[k]}</div>);

//console.log('ShowCurrentPhrases workPhrases=',workPhrases)

  //console.log('ShowCurrentPhrases result=',result)         

    };//for

    //  result = renderHTML(<div class="phrases_cont">{result}</div>);
    //console.log('ShowCurrentPhrases 2 result=',result)   
  }//for

  const el = document.getElementById('phrases_wrapper');
  el.scrollIntoView({block: "start", behavior: "smooth"});

  return workPhrases;

  
}//---end of ShowCurrentPhrases
