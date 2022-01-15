//HeaderWordsList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

//import {ShowWordTest} from "../showWordTest/ShowWordTest.js";

import  "./HeaderWordsList.css";

//import {wordsRandom}      from "../wordsRandom/wordsRandom.js";


let count_pick_button_show_word         = 0;
let count_pick_button_show_description  = 0;
let current_number_word                 = 0;
let count_pick_button_show_answer       = 0;
let current_number_word_group           = 0;
let words_files                         = null;
let list_words_wrapper                  = 'visible';
let nWords                              = 0;
let all_words                           = null;
let state_label_next_descr_value        = ''; //first sentence
let work_arr                            = null;
let input_input_word_value              = null;


export function HeaderWordsList() { //----------------------
 
    function noVisibilityWords(e) {//----------------------
        dispatch({  type: 'HeaderWordsList_noVisibilityWords',
                    payload: {
                        list_words_wrapper:  'hidden'
                    }
        })        
//          document.getElementById('list_words_wrapper').style.visibility = 'hidden';
      //    e.target.style.background = 'red';
    } //----end of  noVisibilityWords ----------------------    


    let dispatch = useDispatch();  


    words_files = useSelector((store) => store.words_files);

    all_words   = useSelector((store) => store.all_words);

    
    let work1;
    let arr=[];


console.log('HeaderWordsList: current_number_word=',current_number_word);	
/*
console.log('HeaderWordsList: all_words=',all_words);
console.log('HeaderWordsList: all_words[0]=',all_words[0]);
console.log('HeaderWordsList: all_words[0][0]=',all_words[0][0]);
console.log('HeaderWordsList: all_words[0][0].D=',all_words[0][0].D);
*/

  	for(let i = 0; i < words_files.length; i++){ //list: SOCIETY, SPORT,ACCOMMODATION,APPEARANCE,...
 
//        words = all_words[i]; // one of: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),

//console.log('HeaderWordsList: state_label_next_descr_value=',state_label_next_descr_value);
		work1 = words_files[i];
//console.log('work1=',work1)	
    	arr[i] =    (<div key={work1} id={work1} className="menu_word" 
                        fontSize="11px" 
                        value = {i}
                        onClick= {() => 
                            dispatch({  type: 'HeaderWordsList', 
                                payload: {
                                    showHideWords:                              true,
                                    list_words_wrapper:                         'hidden',     
                                    count_pick_button_show_word:                0,
                                    count_pick_button_show_description:         0,
                                    current_number_word:                        0,
                                    count_pick_button_show_answer:              0,
                                    current_number_word_group:                  i,
                                    state_button_next_descr_color:              'white',
                                    state_label_next_descr_value:               state_label_next_descr_value,//first sentence
                                    state_input_word_value:                     '',
                                    state_label_yes_no_word_value:              '',
                                    state_label_yes_no_word_style:              {color:  'green', visibility: 'hidden'},
                                    state_tate_label_answer_value:              '',
                                    state_label_answer_visibility:              'hide',
                                    state_button_show_words_color:              'white',
                                    state_label_show_words_value:               '',
                                    state_label_show_words_visibility:          'hide',
                                    state_label_show_transcription_visibility:  'hide',
                                    state_label_show_transcription_value:       '',
                                    state_button_next_word_value:               'Next Word ' + ( current_number_word+1) +'/'+ nWords,
                                    work_arr:                                   [],
                                    input_input_word_value:                     '',
                                    showHideTest:                               false,
                                    showHideListen:                             false,                                                                                  
                                    showHidePhrases:                            false,
                                    showHideJokes:                              false
                                }
                            })                      
                        }
                     >
                        {work1}
                     </div>
                    )
    }//for
    //if((current_number_word === 0) && (work_arr.length === 0) && (input_input_word_value === '')) {
    if(list_words_wrapper === 'visible') 
      	return (<div id="list_words_wrapper" onMouseLeave={noVisibilityWords}> {arr} </div>) 
    else return null;      


}//end of HeaderWordsList.js------------------