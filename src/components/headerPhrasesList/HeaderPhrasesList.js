//HeaderPhrasesList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderPhrasesList.css";


let list_test_wrapper       = null;

let list_words_wrapper      = null;

let list_listen_wrapper     = null;

let nPhrases                = null;

let list_phrases_wrapper    = null;


export function HeaderPhrasesList() {

console.log('HeaderPhrasesList -------------');


    let dispatch = useDispatch();  

    
    nPhrases = useSelector((store) => store.nPhrases);

    list_phrases_wrapper = useSelector((store) => store.list_phrases_wrapper);

console.log('1 HeaderPhrasesList:  list_phrases_wrapper=',list_phrases_wrapper);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';

    for(let kk = 1; kk <= nPhrases; kk++){
            work3 = 'PHRASES' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_phrases" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderPhrasesList', 
                                                                                payload: {
                                                                                    currentPhrases:     kk-1, 
                                                                                    showHideTest:       false,
                                                                                    showHideWords:      false,  
                                                                                    showHideListen:     false,                                                                                  
                                                                                    showHidePhrases:    true,    
                                                                                    list_tests_wrapper: false,
                                                                                    list_words_wrapper: false,
                                                                                    list_listen_wrapper:false
                                                                                }
                                                                            })
                                                            }
                            >
                                {work3}
                            </div>)
    }

    if(list_phrases_wrapper === 'visible') return work2
    else return null;

}// end of HeaderListenList------------


