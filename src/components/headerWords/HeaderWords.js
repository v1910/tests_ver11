//HeaderWords.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {HeaderWordsList} from "../headerWordsList/HeaderWordsList.js";

import  "./HeaderWords.css";

//import {HeaderWordsList} from "../headerWordsList/HeaderWordsList.js";

let words_wrapper = null;
let list_words_wrapper = null;

export function HeaderWords() {

    function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------    
        console.log('HeaderWords: mouseEnterList:  mouseEnterList--------------')
        
            dispatch({  type: 'HeaderWords_mouseEnterList_mouseLeaveList', 
                    payload: {
                        words_wrapper:      'visible',
                        list_words_wrapper: 'visible'

                    }
            });
        
    }//end of mouseEnterList--------------------
        
        
    function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
console.log('HeaderWords: mouseLeaveList-------')
console.log('HeaderWords:  HeaderTests:  words_wrapper=',words_wrapper);   

      
            dispatch({  type: 'HeaderWords_mouseEnterList_mouseLeaveList',            
                        payload: {
                            words_wrapper:      'hidden',
                            list_words_wrapper: 'visible'
                        }
            });
            
    }// end of mouseLeaveList-------------
        
    let work = null;
    
    words_wrapper = useSelector((store) => store.words_wrapper);
    
    
    let dispatch = useDispatch();
    
    let menuWords = 
        <div id="header_menu_tests" className="header_menu_item">
            Words
        </div>
    
    
    if(words_wrapper === 'visible') {
        work =  (<div id="words_wrapper" style={{visibility:{words_wrapper}}}>
                    <HeaderWordsList />
                </div>)
    }
    else work = null;
    
    console.log('HeaderWords:  HeaderTests:  work=',work); 

    return (

        <div id="header_menu_tests_cont_id" onMouseEnter={mouseEnterList} 
                                            onMouseLeave={mouseLeaveList}>
            {menuWords}
            {work}            
        </div>
    )
}//end of HeaderWords.js--------


//<HeaderWordsList />

