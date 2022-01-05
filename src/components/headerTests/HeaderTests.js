//HeaderTests.js------------------

import React from 'react';

import {HeaderTestsList} from "../headerTestsList/HeaderTestsList.js";

import  "./HeaderTests.css";

import { useSelector, useDispatch } from 'react-redux';


let list_tests_wrapper = null;

let selected_answer = -1;  // number of the selected answer in the current question

let correct_answer = -1;  // number of the correct answer in the current question  

let current_question = 0;  // number of current question ( 0  -  first)

let count_time_question = null;

let count_questions_test = null;

let count_time_test = null;

let work = null;


export function HeaderTests() {//--------------------------

console.log('HeaderTests-----');  


function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------
    
console.log('HeaderTests: mouseEnterList--------------')
//console.log('2 HeaderTests:  list_tests_wrapper=',list_tests_wrapper);
    
        dispatch({  type: 'HeaderTests_mouseEnterList', 
                payload: {
                    count_time_question:    count_time_question, 
                    count_time_test:        count_time_test,
                    list_tests_wrapper:     'visible', 
                    selected_answer:        selected_answer, 
                    correct_answer:         correct_answer, 
                    current_question:       current_question,
                    count_correct_answer:   count_correct_answer, 
                }
        });
    
}//end of mouseEnterList--------------------
    
    
function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
console.log('HeaderTests: mouseLeaveList-------')
console.log('1 HeaderTests:  list_tests_wrapper=',list_tests_wrapper);        
        dispatch({  type: 'HeaderTests_mouseLeaveList', 
                    payload: {
                        list_tests_wrapper: 'hidden'
                    }
        });
}// end of mouseLeaveList
    
count_questions_test = useSelector((store) => store.count_questions_test);

list_tests_wrapper = useSelector((store) => store.list_tests_wrapper);

let count_correct_answer = Array(count_questions_test).fill(0);  // count of correct answers for every question
    
count_time_question = Array(count_questions_test).fill('00:00');  // all time for the current question

count_time_test = Array(count_questions_test).fill('00:00'); // all time for the current test

let dispatch = useDispatch();

let menuTest = 
    <div id="header_menu_tests" className="header_menu_item">
        Tests
    </div>



list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 

console.log('1 HeaderTests:  list_tests_wrapper=',list_tests_wrapper);


if(list_tests_wrapper === 'visible') {
    work =  (<div id="list_tests_wrapper" style={{visibility:{list_tests_wrapper}}}>
                <HeaderTestsList />
            </div>)
}
else work = null;

 
return  (
        <div id="header_menu_tests_cont_id" onMouseEnter={mouseEnterList} 
                                            onMouseLeave={mouseLeaveList}>
            {menuTest}
            {work}
        </div>
)
}//end of HeaderTests
