//ShowTest.js-----------------------------------
//Show the chosen Test : numberTest


//import React from "react"
import ReactDOM from 'react-dom';


//import { useSelector, useDispatch } from 'react-redux';

import  "./ShowTest.css";

import {ShowCurrentTest} from "../showCurrentTest/ShowCurrentTest.js";

//console.log('showTest:-------+++++++++++++++------ ');   

export function ShowTest(numberTest,count_questions_test){    
      
//    const count_questions_test = useSelector((store) => store.count_questions_test);
    console.log('ShowTest:------------- numberTest=',numberTest); 

 //   console.log('ShowTest:------------- count_questions_test=',count_questions_test);       


//    let count_questions_test = 20;
    console.log('ShowTest:------------- count_questions_test=',count_questions_test);       
//    const dispatch = useDispatch();  

//    let count_correct_answer = Array(count_questions_test).fill(0);  // count of correct answers for every question
    
//    let count_time_question = Array(count_questions_test).fill('00:00');  // all time for the current question

//    let count_time_test = Array(global.count_questions_test).fill('00:00'); // all time for the current test
console.log('ShowTest:------------- 1');
    //let selected_answer = -1;  // number of the selected answer in the current question

    //let correct_answer = -1;  // number of the correct answer in the current question  
    
//    let current_question = 0;  // number of current question ( 0  -  first)


//    if(!((document.getElementById('header_menu_tests') === 'underfined') || 
//         (document.getElementById('header_menu_tests') === null)))
//        document.getElementById('header_menu_tests').style.textDecoration = "underline";

//    if(!((document.getElementById('words_wrapper') === 'underfined') || 
//         (document.getElementById('words_wrapper') === null)))
//        document.getElementById('words_wrapper').style = {visibility: 'hide'};


//    let currentTest = numberTest; // current test
console.log('ShowTest:------------- 2');

    function ShowTestWork(){
        return <ShowCurrentTest />;
    }//---end of ShowTestWork

    ReactDOM.render(<ShowTestWork />, document.getElementById('tests_wrapper'));

} //----end of  ShowTest

