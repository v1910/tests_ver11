//Header.js---------------------------

import React from "react";

import {HeaderTests} from "../headerTests/HeaderTests.js";
import {HeaderWords} from "../headerWords/HeaderWords.js";
import {HeaderListen} from "../headerListen/HeaderListen.js";
import {HeaderPhrases} from "../headerPhrases/HeaderPhrases.js";
import {HeaderJokes} from "../headerJokes/HeaderJokes.js";

import  "./Header.css";


export function  Header() {  
//  console.log('Header---');
    return ( 
      <div class="header_header">
        <HeaderTests />
        <HeaderWords />
        <HeaderListen />
        <HeaderPhrases />
        <HeaderJokes />
     </div>
    )//return

}//end of Header-----------
