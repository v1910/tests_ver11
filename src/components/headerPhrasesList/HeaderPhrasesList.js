//HeaderPhrasesList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderPhrasesList.css";


let list_test_wrapper       = null;

let list_words_wrapper      = null;

let list_listen_wrapper     = null;

let nPhrases                = null;

let list_phrases_wrapper    = null;

let phrases_collections     = null;

export function HeaderPhrasesList() {

console.log('HeaderPhrasesList -------------');


    let dispatch = useDispatch();  

    
    list_phrases_wrapper = useSelector((store) => store.list_phrases_wrapper);

    phrases_collections = useSelector((store) => store.phrases_collections);

    nPhrases = phrases_collections.length;

//console.log('1 HeaderPhrasesList:  list_phrases_wrapper=',list_phrases_wrapper);
//console.log('HeaderTestsList phrases_collections=',phrases_collections);
    
    let work2 = [];
    let work3 = '';

    for(let kk = 1; kk <= nPhrases; kk++){
            work3 = phrases_collections[kk-1].toUpperCase();
            work2[kk-1] =  (<div id={work3} class="menu_phrases" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                                onClick =    {() => {   dispatch({  type: 'HeaderPhrasesList', 
                                                                                    payload: {
                                                                                        currentPhrases:     phrases_collections[kk-1], 
                                                                                        showHideTest:       false,
                                                                                        showHideWords:      false,  
                                                                                        showHideListen:     false,                                                                                  
                                                                                        showHidePhrases:    true,    
                                                                                        showHideJokes:      false, 
                                                                                        list_tests_wrapper: false,
                                                                                        list_words_wrapper: false,
                                                                                        list_listen_wrapper:false,
                                                                                        phrases:            '',
                                                                                        phrases_wrapper_visibility: {visibility: 'block'}
                                                                                    }
                                                                                });

                                                                    }
                                                            }
                            >
                                {work3}
                            </div>)
    }


    if(list_phrases_wrapper === 'visible') return work2
    else return null;


}// end of HeaderListenList------------

/*

let dispatch = useDispatch();  

useEffect(() => {
  fetch('/getGreatings')
  .then(response => response.json())
  .then(phrases => {
    dispatch({type: 'ShowCurrentPhrases', 
      payload: {
        phrases: phrases
      }
    })

  })
});

*/