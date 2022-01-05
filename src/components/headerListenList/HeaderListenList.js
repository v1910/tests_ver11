//HeaderListenList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderListenList.css";

//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";


let list_tests_wrapper  = null;

let nAudio              = null;

let list_listen_wrapper = null;


export function HeaderListenList() {

console.log('HeaderTestsList -------------');


    let dispatch = useDispatch();  

    
    nAudio = useSelector((store) => store.nAudio);

    list_listen_wrapper = useSelector((store) => store.list_listen_wrapper);
/*
    const currentTests = useSelector((store) => store.currentTest);

    list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 
*/
console.log('1 HeaderistenList:  list_listen_wrapper=',list_listen_wrapper);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';

    for(let kk = 1; kk <= nAudio; kk++){
            work3 = 'STORY' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_test" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderListenList', 
                                                                                payload: {
                                                                                    currentAudio:       kk-1, 
                                                                                    showHideTest:       false,
                                                                                    showHideWords:      false,  
                                                                                    showHideListen:     true,                                                                                  
                                                                                    list_tests_wrapper: 'hidden',
                                                                                    list_words_wrapper: 'hidden'
                                                                                }
                                                                            })
                                                            }
                            >
                                {work3}
                            </div>)
    }

    if(list_listen_wrapper === 'visible') return work2
    else return null;

}// end of HeaderListenList------------


