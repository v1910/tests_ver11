//ShowCurrentTest.js:   show curent test--------------------------

import React from "react";

import './ShowCurrentTest.css';

import {QuestionTest} from "../questionTest/QuestionTest.js";

import {AnswerTest} from "../answerTest/AnswerTest.js";

import {FooterQuestion} from "../footerQuestion/FooterQuestion.js";


import { useSelector, useDispatch } from 'react-redux';


let count_time_question = null;
let count_time_test = null;
let X_setInterval = 0;
let correct_answer = null;
let tests = null;
let count_correct_answer = null;
let countDownDate = null;
let countDownDate_qst = null; // start time for the chose question
let current_question = null;
let currentTest = null;
let count_questions_test = null;
//let arr_state_test = null; // state of every question: true - curent question. false
let state_green_red = null;
let selected_answer = -1;
//let arr_state_green_red = null; // state of every question: green, 
                                //red: [user answer, correct answer] for every question
let firstTimer = null;
let state_count_time_test = null; // time of all test for every question
let state_count_time_question = null; // time for every question
let state_test = null;


export function ShowCurrentTest(){   //show curent test --------------------------------------------------------

console.log('ShowCurrentTest: +++++++++++++');    

  // handleChange - choosing an answer for the question  ---------------------------------------------
  function handleChange(evt){  //evt.par1 - number of the current question; evt.par2 - selected answer.
console.log('ShowCurrentTest: handleChange:  evt=',evt);  
//console.log('1 ShowCurrentTest: handleChange:  state_test=',state_test); 
    if(evt.par1 === current_question){
        firstTimer = evt.par4;
        X_setInterval = evt.par3;

        let selected_answer = -1;
//        let arr_state_test_new = null;
//        let arr_state_green_red_new = null; // = [user answer, correct answer]     
        let li_number = null; //selected answer  in the array   

        if(state_test[evt.par1] === true) state_test[evt.par1] = false;            
//console.log('1 ShowCurrentTest: handleChange:  state_test=',state_test);         

        if(state_test[evt.par1] === false) {
//          arr_state_test_new = state_test.slice();
//          arr_state_green_red_new = state_green_red.slice(); // = [user answer, correct answer]     
          li_number = evt.par2 - 1; //selected answer  in the array
          
          current_question = evt.par1;    // number of the current question
    
          selected_answer = li_number; //selected answer in the array of answers
    
          let id_input = "id" + String(current_question*10 + li_number);
          correct_answer = Number(tests[currentTest][current_question].C_A) - 1; 
          state_green_red[current_question] = [li_number, correct_answer];
//console.log('ShowCurrentTest: handleChange:  correct_answer=',correct_answer, '  selected_answer=',selected_answer);                 
          let id_correct =  "id" + String(current_question*10 + correct_answer);//(correct_answer - 1));
    
          if(id_input === id_correct){
            count_correct_answer[current_question] = count_correct_answer[current_question] + 1; 	
          }
    
//console.log('1 ShowCurrentTest: handleChange:  before clearInterval: X_setInterval=',X_setInterval);                 
          clearInterval(X_setInterval);       
//console.log('1 ShowCurrentTest: handleChange:  after clearInterval: X_setInterval=',X_setInterval);                           

          firstTimer = null;

          countDownDate_qst   = new Date().getTime(); // start time for the chose question      
                    
          current_question++; // go next question

          if(current_question < count_questions_test) {
            let ID_work = 'ID'+ current_question + currentTest*100 + '_time_test';
            let ID_next = ('ID'+ (current_question + 1)) + currentTest*100 +  '_time_question';
//            state_test[current_question] = false;
//console.log('1 ShowCurrentTest: handleChange: before startWatch4:  X_setInterval=',X_setInterval);  

            startWatch4(ID_next, ID_work, current_question, firstTimer, countDownDate_qst, X_setInterval); // start time for next question
          }//if
          else (
            firstTimer = true
          )  

//console.log('2 ShowCurrentTest: handleChange: after startWatch4: X_setInterval=',X_setInterval);                 
        }// if
//console.log('2 ShowCurrentTest: handleChange:  state_test=',state_test);
    }//if
        dispatch({type: 'ShowCurrentTest_handleChange',  
            payload: {
                state_green_red:      state_green_red, 
                state_test:           state_test,
                current_question:     current_question,
                selected_answer:      selected_answer,
                count_correct_answer: count_correct_answer,
                firstTimer:           firstTimer,
                countDownDate_qst:    countDownDate_qst
            }
        }); 

      } //--- end handleChange --------------------------------------------------------------       
    
    
      // startWatch4 -  timer of common time for the choosing question; insert in ID_TIME element
      //    ID_time_test - ID for question time
      // Update the count down every 1 second
      function startWatch4(ID_TIME, ID_time_test, current_question, firstTimer, countDownDate_qst, X_setInterval) {  //----------------------------------
//console.log('ShowCurrentTest: startWatch4: +++++++++');
//console.log('3 ShowCurrentTest: startWatch4:  state_test=',state_test);  

      // sumMinSec - sum minutes and seconds of all test; return -  minutes:seconds              
        function sumMinSec(count_time_test_work, count_time_quest) {  //-------------
//console.log('3 ShowCurrentTest: startWatch4: sumMinSec: count_time_test_work=',count_time_test_work);           
          let pos=-1, minutes=0, seconds=0;
//    console.log('ShowCurrentTest: startWatch4: sumMinSec: 1 count_time_test_work=',count_time_test_work,'  count_time_quest.indexOf(:)=',count_time_quest.indexOf(':'));
    
          pos = count_time_quest.indexOf(':');
//console.log('pos=',pos);          
          if (pos > 0) {
            minutes = Number(count_time_quest.slice(0, pos));
            seconds = Number(count_time_quest.slice(pos+1));
          } else {
            minutes = 0;
            seconds = 0;
          }
//console.log('2 count_time_test_work=',count_time_test_work,'  count_time_quest=',count_time_quest) 
          pos = count_time_test_work.indexOf(':');
          if (pos > 0) {
            minutes += Number(count_time_test_work.slice(0, pos));
            seconds += Number(count_time_test_work.slice(pos+1));
          } 
        
          if (seconds >= 60) {
            minutes += Math.floor(seconds / 60);
            seconds = seconds - (Math.floor(seconds / 60) * 60);
          }
    
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
    
          if (seconds < 10) {
            seconds = '0' + seconds;
          }
//console.log('4 ShowCurrentTest: startWatch4: sumMinSec:  end: minutes=',minutes,'  seconds=',seconds)
          return minutes + ':' + seconds;
          
        } //--- end of sumMinSec  --------------------------------------------

        let work;
        let now;
        let distance;
        let minutes;
        let seconds;

//console.log('5 ShowCurrentTest: startWatch4: count_time_test=',count_time_test, '  firstTimer=',firstTimer);
//        clearInterval(X_setInterval);
//console.log('ShowCurrentTest: startWatch4: count_time_test=',count_time_test);    
//console.log('ShowCurrentTest: current_question=',current_question);    

//console.log('ShowCurrentTest: startWatch4: time_work2=',time_work2);            
        if(current_question === 0) count_time_test[current_question] = count_time_question[current_question]
        else 
        if(count_time_test[current_question] === '00:00'){     
          count_time_test[current_question] = count_time_test[current_question - 1];
        }

//console.log('0 ShowCurrentTest: startWatch4: count_time_test=',count_time_test, '  current_question=',current_question, '  firstTimer=',firstTimer);    

        if(firstTimer === null) {//=============================================================               
          if(current_question > 0) clearInterval(X_setInterval);       
          X_setInterval = setInterval(function() { //++++++++++++++++++++++++++
          // Get today's date and time
            now = new Date().getTime();
      
          // Find the distance between now and the count down date
            distance = now - countDownDate_qst;
//console.log('ShowCurrentTest: startWatch4:  distance ==== ', distance, '  now=',now, '  countDownDate_qst=', countDownDate_qst);	      
          // Time calculations for days, hours, minutes and seconds
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result in the element with id="demo"
        //  document.getElementById(ID_TIME).innerHTML = days + "d " + hours + "h "
        //  + minutes + "m " + seconds + "s ";
//console.log('ShowCurrentTest: startWatch4:  1 ID_TIME ==== ', ID_TIME,  '   minutes = ' + minutes, '   seconds = ' + seconds);	
      
//            work = count_questions_test;  //work = document.getElementById(ID_TIME);
      
            if (minutes < 10) {
              minutes = '0' + minutes;
            }
            if (seconds < 10) {
              seconds = '0' + seconds;
            }  
      
            count_time_question[current_question] = minutes + ":" + seconds;
//            let work_count_time_question = minutes + ":" + seconds;
        
//            if(work !== null) {
//            count_time_question[time_work] = work_count_time_question;  //count_time_question[time_work]; 
//            }
        
//console.log('ShowCurrentTest: startWatch4: count_time_question=',count_time_question, '  distance=',distance)
            // If the count down is finished, write some text
            if(distance < 0) {
//console.log('3 ShowCurrentTest: startWatch4:  before clearInterval: X_setInterval=',X_setInterval);                 
              clearInterval(X_setInterval);       
//console.log('3 ShowCurrentTest: startWatch4:  after clearInterval: X_setInterval=',X_setInterval); 
            }
        
            if(current_question === 0) count_time_test[current_question] = count_time_question[current_question]
            else {
              
//              count_time_test[current_question] = count_time_test[current_question] + count_time_test[current_question-1];
//console.log('1 ShowCurrentTest: 1 count_time_test[current_question1]=',count_time_test[current_question],'  current_question1=',current_question);
              count_time_test[current_question] = sumMinSec(count_time_test[current_question],'00:01');
//console.log('2 ShowCurrentTest: 1 count_time_test[current_question]=',count_time_test[current_question]); 
            }
//console.log('ShowCurrentTest: startWatch4:  X_setInterval=',X_setInterval);  
      
            dispatch({type: 'ShowCurrentTest_startWatch4', 
              payload: {          
                      count_time_question:  count_time_question, 
                      count_time_test:      count_time_test
              }
            });  
          
          }, 1000);//++++++++++++++++++++++++++

          dispatch({type: 'ShowCurrentTest_startWatch4_2', 
            payload: {          
                  X_setInterval:        X_setInterval,
                  firstTimer:           true
            }
          });  
      
//console.log('4 ShowCurrentTest: end of startWatch4:  X_setInterval=',X_setInterval);  
      }//if =================================================================================

//console.log('4 ShowCurrentTest: startWatch4:  state_test=',state_test);  
        
      }//---end of startWatch4  -------------------------------------------------------
    
//console.log('5 ShowCurrentTest:   state_test=',state_test); 

    correct_answer = useSelector((store) => store.correct_answer);
    tests = useSelector((store) => store.tests);   
    count_correct_answer = useSelector((store) => store.count_correct_answer);
    countDownDate = useSelector((store) => store.countDownDate);
    countDownDate_qst = useSelector((store) => store.countDownDate_qst);
    X_setInterval = useSelector((store) => store.X_setInterval);
    current_question = useSelector((store) => store.current_question);
    currentTest = useSelector((store) => store.currentTest);
    count_questions_test = useSelector((store) => store.count_questions_test); //the count of questions in the test
    count_time_question = (useSelector((store) => store.count_time_question)).slice();
    count_time_test = (useSelector((store) => store.count_time_test)).slice();
    firstTimer = useSelector((store) => store.firstTimer); // firstTimer = null (start timer), firstTimer = true (stop timer)
    state_test = useSelector((store) => store.state_test);
    state_green_red = (useSelector((store) => store.state_green_red)).slice();

//console.log('6 ShowCurrentTest:   state_test=',state_test); 

    let dispatch = useDispatch();   

    let ID_time; // ID for time_test
    let ID_time_qst; // ID for time_tests_qst
    let ID_work;

    // show  TESTS
//    countDownDate = new Date().getTime(); // start time for the chose test

    let element = [];

    let opacity_val = null;
    
    for(let ii=0; ii < count_questions_test; ii++) { // show all questions for the test
        ID_work = 'ID'+ ii + currentTest*100 +  '_question_cont';  
        if (current_question === ii) opacity_val = {opacity: 1} //current question
        else opacity_val = {opacity: 0.5};
        if(state_test[count_questions_test-1] === false) opacity_val = {opacity: 1}; //end of choosing all answers
//console.log('2 ShowCurrentTest:   state_test=',state_test);          
        element[ii] = (
          <div key={ID_work} id={ID_work} className="question_cont" style={opacity_val}>
            <QuestionTest numberQuestion={ii} />
            <AnswerTest numberQuestion={ii} func={(e) => handleChange(e)} />
            <FooterQuestion numberQuestion={ii} />
          </div>
        )
    }  // for


    ID_time = 'ID'+ current_question + currentTest*100 + '_time_question';
    ID_time_qst = 'ID'+ current_question + currentTest*100 + '_time_test';

    startWatch4(ID_time, ID_time_qst, current_question, firstTimer, countDownDate_qst, X_setInterval); // start time for 0-th question  
           
//console.log('7 ShowCurrentTest:   state_test=',state_test); 
    
    window.location.hash = 'tests_wrapper';

    return element;

} //--- end of ShowCurrentTest -----------------------------------------------------