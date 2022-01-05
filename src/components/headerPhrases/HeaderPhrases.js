//HeaderPhrases.js------------------

import React from 'react';

import {HeaderPhrasesList} from "../headerPhrasesList/HeaderPhrasesList.js";

import  "./HeaderPhrases.css";

import { useSelector, useDispatch } from 'react-redux';


let list_phrases_wrapper      = null;


export function HeaderPhrases() {

console.log('HeaderPhrases-----');  


    function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------
        
console.log('HeaderPhrases: mouseEnterList--------------')
//console.log('2 HeaderListen:  list_tests_wrapper=',list_tests_wrapper);
        
            dispatch({  type: 'HeaderPhrases_mouseEnterList', 
                    payload: {
                        list_phrases_wrapper: 'visible'
                        
                    }
            });
        
    }//end of mouseEnterList--------------------


    function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
console.log('HeaderPhrases: mouseLeaveList-------')
                dispatch({  type: 'HeaderPhrases_mouseLeaveList', 
                            payload: {
                                list_phrases_wrapper: 'hidden'
                            }
                });
    }// end of mouseLeaveList------------------------


    let dispatch = useDispatch();

    let work = null;

    list_phrases_wrapper = useSelector((store) => store.list_phrases_wrapper);

    let menuPhrases = 
    <div id="header_menu_phrases" className="header_menu_phrases_cont">
        Phrases
    </div>


    if(list_phrases_wrapper === 'visible') {
        work =  (<div id="list_phrases_wrapper" style={{visibility:{list_phrases_wrapper}}}>
                    <HeaderPhrasesList />
                </div>)
    }
    else work = null;
    
    
    return  (
            <div id="header_menu_phrases_cont_id" onMouseEnter={mouseEnterList} 
                                                  onMouseLeave={mouseLeaveList}>
                {menuPhrases}
                {work}
            </div>
    )
}

    



