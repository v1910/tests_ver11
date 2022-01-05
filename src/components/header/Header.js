//Header.js---------------------------

import React from "react";

import {HeaderTests} from "../headerTests/HeaderTests.js";
import {HeaderWords} from "../headerWords/HeaderWords.js";
import {HeaderListen} from "../headerListen/HeaderListen.js";
import {HeaderPhrases} from "../headerPhrases/HeaderPhrases.js";
import {HeaderJokes} from "../headerJokes/HeaderJokes.js";
import { useSelector, useDispatch } from 'react-redux';
import  "./Header.css";


export function  Header() {  
  console.log('Header---');

    return ( 

      <div class="header_header">
        <HeaderTests />
        <HeaderWords />
        <HeaderListen />
        <HeaderPhrases />
     </div>
    )//return

}//end of HeaderBgrTest1-----------

/*
 
    return ( 

      <div class="header_header">
        <HeaderTests />
        <HeaderWords />
        <HeaderListen />
        <HeaderPhrases />
        <HeaderJokes />

        <div id="header_text_1">
          <b>English Learning Tests</b>
        </div>
      </div>
    )//return

          <div id="header_menu_lsten_cont_id" className="header_menu_tests_cont">
            <HeaderMenuTestsCont f1={HeaderMenuListen} f2={ListListenWrapper} />
          </div>
          <div id="header_menu_phrases_cont_id" className="header_menu_tests_cont">
            <HeaderMenuTestsCont f1={HeaderMenuPhrases} f2={ListPhrasesWrapper} />
          </div>      
          <div id="header_menu_jokes_cont_id" className="header_menu_tests_cont">
            <HeaderMenuTestsCont f1={HeaderMenuJokes} f2={ListJokesWrapper} />
          </div> 

      <div class="header_header" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

          */