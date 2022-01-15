
//HeaderJokes.js------------------
//Show Jores menu

import React from 'react';

//import {HeaderJokesList} from "../headerJokesList/HeaderJokesList.js";

import  "./HeaderJokes.css";

import { useSelector, useDispatch } from 'react-redux';


let list_jokes_wrapper      = null;


export function HeaderJokes() {

    console.log('HeaderJokes-----');  


    function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------
        
//console.log('HeaderListen: mouseEnterList--------------')
//console.log('2 HeaderListen:  list_tests_wrapper=',list_tests_wrapper);
        
            dispatch({  type: 'HeaderJokes_mouseEnterList', 
                    payload: {
                        list_jokes_wrapper: 'visible'
                        
                    }
            });
        
    }//end of mouseEnterList--------------------


    function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
//console.log('HeaderListen: mouseLeaveList-------')
                dispatch({  type: 'HeaderJokes_mouseLeaveList', 
                            payload: {
                                list_jokes_wrapper: 'hidden'
                            }
                });
    }// end of mouseLeaveList------------------------


    let dispatch = useDispatch();

    let work = null;

    list_jokes_wrapper = useSelector((store) => store.list_jokes_wrapper);

    let menuJokes = 
    <div id="header_menu_jokes" className="header_menu_item">
        Jokes
    </div>

/*
    if(list_jokes_wrapper === 'visible') {
        work =  (<div id="list_jokes_wrapper" style={{visibility:{list_jokes_wrapper}}}>
                    <HeaderJokesList />
                </div>)
    }
    else work = null;
*/    
    
    return  (
            <div  id="header_menu_jokes_cont_id"  
                  fontSize="11px" 
                  onClick =    {() => {   dispatch({  type: 'HeaderJokes', 
                                                        payload: {
                                                            showHideTest:       false,
                                                            showHideWords:      false,  
                                                            showHideListen:     false,                                                                                  
                                                            showHidePhrases:    false,    
                                                            showHideJokes:      true,
                                                            list_tests_wrapper: false,
                                                            list_words_wrapper: false,
                                                            list_listen_wrapper:false,
                                                            phrases:            ''
                                                        }
                                                    });

                                        }
                                }                                     
            >
                {menuJokes}
            </div>
    )
}//end of HeaderJokes --------------------