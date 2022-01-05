//QuestionTest.js------Form one test question

import React from "react";
import { useSelector } from 'react-redux';

//import ReactDOM from 'react-dom';

//QuestionTest -  add <ui class="question_test"> 
export function QuestionTest(props) {
    let currentTest = useSelector((store) => store.currentTest); 
    let tests = useSelector((store) => store.tests);

console.log('QuestionTest: props.numberQuestion=',props.numberQuestion);
//console.log('numberQuest=',numberQuest);    
console.log('QuestionTest: currentTest=',currentTest);    
    let question = tests[currentTest][props.numberQuestion].Q;
    let ID_work = 'ID'+ props.numberQuestion + currentTest*100 +  '_question_test'; 
    return <div id={ID_work} className="question_test">{question}</div>

} // end of QuestionTest