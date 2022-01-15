//App.js- main program -----------------

import React from 'react';

import {Header} from '../header/Header.js';

import {Tests} from '../tests/Tests.js';

import {Words} from '../words/Words.js';

import {Listen} from '../listen/Listen.js';

import {Phrases} from '../phrases/Phrases.js';

import {Jokes} from '../jokes/Jokes.js';

import {Footer} from '../footer/Footer.js';

import './App.css';


function App() {
//console.log("App: -----------------");
    return (
    <>
      <div id="London_bgr" >         
        <Header />
        <div id="header_text_1">
          <b>English Learning Tests</b>
        </div> 
      </div>
      <Tests />
      <Words /> 
      <Listen /> 
      <Phrases />
      <Jokes />
      <Footer />     
    </>      
    )

}
export default App;

/*

*/