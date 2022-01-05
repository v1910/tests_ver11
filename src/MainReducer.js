//MainReducer.js-----------------------------
// It is the store of the site

import React from "react";

import { AllTests } from './components/allTests/AllTests.js';

import {CorrectAnswersTests} from './components/correctAnswersTests/CorrectAnswersTests.js';

import {SOCIETYwords} from "./components/societyWords/society_words.js";
import {SPORTwords} from "./components/sportWords/sport_words.js";
import {ACCOMMODATIONwords} from "./components/accommodationWords/accommodation_words.js";
import {APPEARANCEwords} from "./components/appearanceWords/appearance_words.js";
import {PREPOSITIONSwords} from "./components/prepositionsWords/prepositions_words.js";
import {NATUREwords} from "./components/natureWords/nature_words.js";
import {Jokes} from "./components/jokes/Jokes.js";
import { insertAfter } from "./components/insertAfter/InsertAfter.js";

let workAllTest = AllTests(); // read all tests
//let workTest = workAllTest[0].length; // amount of questions in current test

let initialStore = 

{
	//initialisation -----------
    state_edit: true,
    stateTests: false,
    showHideTest: false,
    stateWords: false,
    stateListen: false,
    statePhrases: false,
    stateJokes: false,
    itemMenu1: "",
    itemMenu2: "",
	 
//	 all_words: [], // array of all words
// 	 jokes_arr: [], // jokes array

//  	 nTests:  0, // quantity of tests
  	 

	 idioms_files:  ["JOB","HOT","MIX"], // idioms files
  	
	/* initialize variables */
	 count:  0, 
	 clearTime:  0, 
	 seconds:  0,
	 minutes:  0,
	 hours:  0, 
	 clearState:  0, 
	 secs:  0,
	 mins:  0,
	 gethours:  0, 


	// tests -----------------
     list_tests_wrapper: 'hidden', // hide or show (visible) list_tests_wrapper

     state_reply: [], // state of reply

     state_button_close: [], // state of button close

     currentTest:  0, // the number of the current test

	 countDownDate:  new Date().getTime(), // start time for the chosing test

	 countDownDate_qst:  new Date().getTime(), // start time for the chosing question

  	 count_time_question:  null,  // all time for the current question

  	 count_time_test:  null, // all time for the current test

	 current_question:  0, // current question  ( 0  -  first)

	 X_setInterval:  0, // id of clearInterval

	 tests:  workAllTest, // read all tests

	 nTests:  workAllTest.length, // amount of all tetsts

	 cAnswers: CorrectAnswersTests(),  // read all correct answers
	
	 selected_answer: -1,  // number of the selected answer in the current question

	 state_tests: [], // test state

     state_green_red: [], //state of red or green color of an answer

     state_count_time_test: [], //state of count time test

     state_count_time_question: [], // state of count time question

     correct_answer: -1,  // number of the correct answer in the current question  

     firstTimer: null,  // = null (start timer, other - stop)

     state_test: null, // state of every question: true -  current question. false

     
     // words -----------------
     all_words: [SOCIETYwords(),SPORTwords(),ACCOMMODATIONwords(),APPEARANCEwords(),
                 PREPOSITIONSwords(),NATUREwords()], // array of all words

     showHideWords: false,  //hide words in Words.js

     words_wrapper: null,

     count_pick_button_show_word: 0,
       
     count_pick_button_show_answer: 0,

	 work_arr: [], // array of random numbers

	 count_pick_button_show_word:  0,  //count of picking button_show_word

	 count_pick_button_show_description:  0, //count of picking button_show_description

	 current_number_word:  0,  //current number word

	 current_number_word_group:  0, // current word group (SOCIETY)

	 count_pick_button_show_answer:  0,

	 nWords:  0, // quantity of words

     words_files:  ["SOCIETY","SPORT","ACCOMMODATION", "APPEARANCE", "PREPOSITIONS", "NATURE"], // words files

	 words:  [], // words array

     state_button_next_descr_color: 'white',

     list_words_wrapper: 'hidden', //hide (show) words list

     state_label_yes_no_word_style: {color:  'green', visibility: 'hidden'},

     input_input_word_value: '',

     button_show_descr_style: "color: white",

     button_show_words_style: "color: white",

     state_label_next_descr_value:               '',

     state_input_word_value:                     '',  

     state_label_yes_no_word_value:              '',

     state_tate_label_answer_value:              '',

     state_label_answer_visibility:              'hide',

     state_button_show_words_color:              'white',

     state_label_show_words_value:               '',

     state_label_show_words_visibility:          'hide',

     state_label_show_transcription_visibility:  'hide',

     state_label_show_transcription_value:       '',

     state_button_next_word_value:               'Next Word ' + ' 1' +'/'+ '0',

     state_label_answer_value:                   '', // value of answer


     

	// LISTEN --------------

     showHideListen:                            false,

	 nAudio:                                    3,  // amount of all audio files

     currentAudio:                              1, //current audio file

     list_listen_wrapper:                       'hidden',

     
    // Phrases -----------------

    showHidePhrases:                            false,  //do not show Phrases

    nPhrases:                                   3,  // amount of all Phrases files

    currentPhrases:                             1, //current Phrases file

    list_phrases_wrapper:                       'hidden',


	// jokes -----------------
	 jokes_arr: Jokes() // read all jokes
	


}; //initialStore  

let workInitialStore = initialStore;

initialStore.count_questions_test = workAllTest[workInitialStore.currentTest].length; // amount of questions in current test

initialStore.nJokes = workInitialStore.jokes_arr.length // amount of all jokes

initialStore.count_correct_answer = Array(initialStore.count_questions_test).fill(0);  // count of correct answers for every question
    
initialStore.count_time_question = Array(initialStore.count_questions_test).fill('00:00');  // all time for the current question
 
initialStore.count_time_test = Array(initialStore.count_questions_test).fill('00:00'); // all time for the current test

initialStore.state_test = Array(initialStore.count_questions_test).fill(true); // state of every question: true -  current question. false

initialStore.state_test[0] = false; 

initialStore.state_green_red = Array(initialStore.count_questions_test).fill([-1,-1]);// state of every question: green, 
                                                            //red: [user answer, correct answer] for every question
initialStore.state_button_close = Array(initialStore.count_questions_test).fill(0);// state of close button                                                             

initialStore.state_reply = Array(initialStore.count_questions_test).fill(' ');// state of close button                                                             


//console.log('MainReducer:--- init:  initialStore.state_reply=',initialStore.state_reply);  

function MainReducer(state = initialStore, action){
//    console.log('MainReducer:--- action=',action);
    
//    console.log('MainReducer: state=',state);
//    console.log('MainReducer: initialStore.state_green_red=',initialStore.state_green_red);

    let payload = action.payload;

    switch(action.type) {
//================================================================================        
        // TESTS----------------------
        case 'HeaderTests_mouseEnterList':       
//console.log('1 MainReducer: HeaderTests_mouseEnterList: payload.list_tests_wrapper=',payload.list_tests_wrapper);                
            return {
                ...state,
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test,
                list_tests_wrapper:     payload.list_tests_wrapper, 
                selected_answer:        payload.selected_answer, 
                correct_answer:         payload.correct_answer, 
                current_question:       payload.current_question,
                count_correct_answer:   payload.count_correct_answer, 
            }
            

        case 'HeaderTests_mouseLeaveList':       
            return {
                ...state,
                list_tests_wrapper: payload.list_tests_wrapper
            }

        case 'HeaderTestsList':       
            return {
                ...state,
                currentTest:        payload.currentTest, 
                showHideTest:       payload.showHideTest,
                list_tests_wrapper: payload.list_tests_wrapper,
                countDownDate:      payload.countDownDate, // start time for the chose test
                countDownDate_qst:  payload.countDownDate_qst, // start time for the chose question
                state_test:         payload.state_test,
                state_green_red:    payload.state_green_red,
                firstTimer:         null,
                showHideWords:      payload.showHideWords                
            }

        case 'ShowCurrentTest_handleChange':       
            return {
                ...state,
                state_green_red:      payload.state_green_red, 
                state_tests:          payload.state_test,
                current_question:     payload.current_question,
                selected_answer:      payload.selected_answer,
                count_correct_answer: payload.count_correct_answer,
                firstTimer:           payload.firstTimer,
                countDownDate_qst:    payload.countDownDate_qst       
            }
            
        case 'ShowCurrentTest_startWatch4':   
            return {
                ...state,            
                count_time_question:    payload.count_time_question, 
                count_time_test:        payload.count_time_test
            }

        case 'ShowCurrentTest_startWatch4_2':   
            return {
                ...state,                     
                X_setInterval:          payload.X_setInterval,
                firstTimer:             payload.firstTimer
            }            

        case 'footerQuestion_why':       
            return {
                ...state,            
                state_reply:        payload.state_reply,
                state_button_close: payload.state_button_close
            }

        case 'footerQuestion_answer_close':       
            return {
                ...state,            
                state_reply:        payload.state_reply,
                state_button_close: payload.state_button_close,
                showHideTest:       payload.showHideTest
            }

//================================================================================   
        //WORDS--------------------------

        case 'HeaderWords_mouseEnterList_mouseLeaveList': 
                
            return {
                ...state,
                words_wrapper:      payload.words_wrapper,
                list_words_wrapper: payload.list_words_wrapper
            };       
            
        case 'HeaderWordsList_noVisibilityWords':                
            return {
                ...state,
                list_words_wrapper:  payload.list_words_wrapper
            };                     

        case 'HeaderWordsList':                
            return {
                ...state,
                showHideWords:                              payload.showHideWords,
                list_words_wrapper:                         payload.list_words_wrapper,
                count_pick_button_show_word:                payload.count_pick_button_show_word,
                count_pick_button_show_description:         payload.count_pick_button_show_description,
                current_number_word:                        payload.current_number_word,
                count_pick_button_show_answer:              payload.count_pick_button_show_answer,
                current_number_word_group:                  payload.current_number_word_group,
                state_button_next_descr_color:              payload.state_button_next_descr_color,
                state_label_next_descr_value:               payload.state_label_next_descr_value,
                state_input_word_value:                     payload.state_input_word_value,
                state_label_yes_no_word_value:              payload.state_label_yes_no_word_value,
                state_label_yes_no_word_style:              payload.state_label_yes_no_word_style,
                state_tate_label_answer_value:              payload.state_tate_label_answer_value,
                state_label_answer_visibility:              payload.state_label_answer_visibility,
                state_button_show_words_color:              payload.state_button_show_words_color,
                state_label_show_words_value:               payload.state_label_show_words_value,
                state_label_show_words_visibility:          payload.state_label_show_words_visibility,
                state_label_show_transcription_value:       payload.state_label_show_transcription_value,
                state_button_next_word_value:               payload.state_button_next_word_value,
                work_arr:                                   payload.work_arr,
                input_input_word_value:                     payload.input_input_word_value,
                showHideTest:                               payload.showHideTest
            };         

        case 'ShowWordTest_showDescr':  
//console.log('MainReducer: ShowWordsTest_showDescr: payload.count_pick_button_show_description=',payload.count_pick_button_show_description)                      
//console.log('MainReducer: ShowWordsTest_showDescr: payload.state_button_next_descr_color=',payload.state_button_next_descr_color)
//console.log('MainReducer: ShowWordsTest_showDescr: payload.state_label_next_descr_value=',payload.state_label_next_descr_value)
            return {
                ...state,
                state_button_next_descr_color:      payload.state_button_next_descr_color,
                state_label_next_descr_value:       payload.state_label_next_descr_value,
                count_pick_button_show_description: payload.count_pick_button_show_description,           
                work_arr:                           payload.work_arr,
                nWords:                             payload.nWords
            };                                              

        case 'ShowWordsTest_input_input_word':                
            return {
                ...state,
                input_input_word_value:         payload.input_input_word_value,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                state_button_next_word_value:   payload.state_button_next_word_value,
                nWords:                         payload.nWords
            };                                                                  

            
        case 'ShowWordsTest_button_input_word':                
//console.log('MainReducer: state_label_yes_no_word_value=',payload.state_label_yes_no_word_value)         
            return {
                ...state,
                state_label_yes_no_word_value:  payload.state_label_yes_no_word_value,
                state_label_yes_no_word_style:  payload.state_label_yes_no_word_style,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                nWords:                         payload.nWords
            };    

        case 'ShowWordsTest_showAnswer':                
console.log('MainReducer: state_button_next_word_value=',payload.state_button_next_word_value)         
            return {
                ...state,
                state_label_answer_value:       payload.state_label_answer_value,
                state_label_answer_visibility:  payload.state_label_answer_visibility,
                work_arr:                       payload.work_arr,
                state_label_next_descr_value:   payload.state_label_next_descr_value,
                nWords:                         payload.nWords,
                state_button_next_word_value:   payload.state_button_next_word_value
            };                                                                           
          

        case 'ShowWordsTest_showWord2':                
//console.log('MainReducer: ShowWordsTest_showWord2: state_label_show_words_value=',payload.state_label_show_words_value)        
            return {
                ...state,
                state_label_show_words_value:       payload.state_label_show_words_value,
                state_button_show_words_color:      payload.state_button_show_words_color,
                state_label_show_words_visibility:  payload.state_label_show_words_visibility,
                count_pick_button_show_word:        payload.count_pick_button_show_word,
                state_button_next_word_value:       payload.state_button_next_word_value,        
                work_arr:                           payload.work_arr,
                state_label_next_descr_value:       payload.state_label_next_descr_value,
                nWords:                             payload.nWords
            };    

        case 'ShowWordsTest_showTranscription':                
console.log('MainReducer: ShowWordsTest_showTranscription: state_label_next_descr_value=',payload.state_label_next_descr_value);        
            return {
                ...state,
                state_label_show_transcription_value:       payload.state_label_show_transcription_value,
                state_label_show_transcription_visibility:  payload.state_label_show_transcription_visibility,
                nWords:                                     payload.nWords,
                state_label_next_descr_value:               payload.state_label_next_descr_value,
                work_arr:                                   payload.work_arr            
            };               

        case 'ShowWordsTest_button_next_word':                
console.log('MainReducer: ShowWordsTest_button_next_word: state_button_next_word_value=',payload.state_button_next_word_value)                
            return {
                ...state,
                state_button_next_descr_color:                  payload.state_button_next_descr_color,
                state_label_next_descr_value:                   payload.state_label_next_descr_value,
                state_input_word_value:                         payload.state_input_word_value,       
                state_label_yes_no_word_value:                  payload.state_label_yes_no_word_value,
                state_label_answer_value:                       payload.state_label_answer_value,
                state_label_answer_visibility:                  payload.state_label_answer_visibility,
                state_button_show_words_color:                  payload.state_button_show_words_color,
                state_label_show_words_value:                   payload.state_label_show_words_value,
                state_label_show_words_visibility:              payload.state_label_show_words_visibility,    
                state_label_show_transcription_value:           payload.state_label_show_transcription_value,
                state_button_next_word_value:                   payload.state_button_next_word_value,
                input_input_word_value:                         payload.input_input_word_value,
                button_show_descr_style:                        payload.button_show_descr_style,
                button_show_words_style:                        payload.button_show_words_style,
                current_number_word:                            payload.current_number_word,
                work_arr:                                       payload.work_arr,
                nWords:                                         payload.nWords
                        
            };                       


//================================================================================
        //LISTEN--------------------------

        case 'HeaderListen_mouseEnterList':                
//console.log('MainReducer: HeaderListen_mouseEnterList: state_label_next_descr_value=',payload.list_listen_wrapper);        
            return {
                ...state,
                list_listen_wrapper: payload.list_listen_wrapper
            };               

        case 'HeaderListen_mouseLeaveList':                
//console.log('MainReducer: HeaderListen_mouseLeaveList: state_label_next_descr_value=',payload.list_listen_wrapper);        
            return {
                ...state,
                list_listen_wrapper: payload.list_listen_wrapper
            };                           

        case 'HeaderListenList':                
console.log('MainReducer: HeaderListenList: state_label_next_descr_value=',payload.showHideListen);        
            return {
                ...state,
                currentAudio:           payload.currentAudio, 
                showHideTest:           payload.showHideTest,
                showHideWords:          payload.showHideWords,  
                showHideListen:         payload.showHideListen,                                                                                  
                list_tests_wrapper:     payload.list_tests_wrapper,
                list_words_wrapper:     payload.list_words_wrapper
            };               

            
//================================================================================    
        //PHRASES--------------------------

        case 'HeaderPhrases_mouseEnterList':                
console.log('MainReducer: HeaderPhrases_mouseEnterList: list_phrases_wrapper: =',payload.list_phrases_wrapper);        
            return {
                ...state,
                list_phrases_wrapper: payload.list_phrases_wrapper
            };               

        case 'HeaderPhrases_mouseLeaveList':                
console.log('MainReducer: HeaderPhrases_mouseLeaveList: list_phrases_wrapper=',payload.list_phrases_wrapper);        
            return {
                ...state,
                list_phrases_wrapper: payload.list_phrases_wrapper
            };                           

        case 'HeaderPhrasesList':                
console.log('MainReducer: HeaderPhrasesList: showHidePhrases=',payload.showHidePhrases);        
            return {
                ...state,
                currentPhrases:         payload.currentPhrases, 
                showHideTest:           payload.showHideTest,
                showHideWords:          payload.showHideWords,  
                showHideListen:         payload.showHideListen,                                                                                  
                showHidePhrases:        payload.showHidePhrases,                                                                                  
                list_tests_wrapper:     payload.list_tests_wrapper,
                list_words_wrapper:     payload.list_words_wrapper,
                list_listen_wrapper:    payload.list_listen_wrapper
            };               


//================================================================================        
            
        default:
            return state;

    } //switch

    return state;   
   
//return null;
}; //end of MainReducer---------------------------


export default MainReducer;




