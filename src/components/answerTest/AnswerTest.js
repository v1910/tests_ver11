//AnswerTest-------- Form answer variants for one test question

import React from "react"

import { useSelector } from 'react-redux';

import './AnswerTest.css';

//import ReactDOM from 'react-dom';

//import {LiAnswer} from "LiAnswer.js";

//AnswerTest -  add <ui class="answer_test"> 

let selected_answer = null;
let state_green_red = null;
let X_setInterval = null;
let firstTimer = null;

export function AnswerTest(props)  {  //-------------------------------------------------------------------
//console.log('AnswerTest: --------------');                
//console.log('AnswerTest:  props.func=',props.func);              
  
  function yellowVisibility(par,e) { // onMouseEnter  ---------------------------------
//console.log('111 yellowVisibility:  par.backgroundColor=',par.backgroundColor);              
    switch (par.backgroundColor) {

      case "green": 
//console.log("yellowVisibility: green");             
        e.target.style.background = 'green';
      break;
      case "rgba(255,192,171,0.5)": 
        e.target.style.background = "rgba(255,192,171,0.5)"; //red
//console.log("yellowVisibility: red");                       
      break;
      default:
//console.log("yellowVisibility: default");                       
        e.target.style.background = 'yellow';
    }//switch

  } //--- end of  yellowVisibility--------------------------------------------------

  function greyVisibility(par,e) {  // onMouseLeave--------------------------------------
//console.log('greyVisibility:  par.backgroundColor=',par.backgroundColor);  
    switch (par.backgroundColor) {

      case "green": 
//console.log("greyVisibility: green");       
        e.target.style.background = 'green';
      break;
      case "rgba(255,192,171,0.5)": 
//console.log("greyVisibility: red");             
        e.target.style.background = "rgba(255,192,171,0.5)";
      break;
      default:
//console.log("greyVisibility: default");               
        e.target.style.background = "rgba(255,255,255,0.5)";
    }

}  //--- end of greyVisibility------------------------------------------------------------

//    let work_li=[];
//console.log('AnswerTest:  currentTest=',currentTest);
//console.log('AnswerTest:  props.numberQuestion=',props.numberQuestion);
    const currentTest       = useSelector((store) => store.currentTest); 
    const current_question  = useSelector((store) => store.current_question); 
    const tests             = useSelector((store) => store.tests); 
    state_green_red         = (useSelector((store) => store.state_green_red)).slice(); //state of every line of answers
    const arr_val           = tests[currentTest][props.numberQuestion]; // data of the curent question of the current test
    X_setInterval           = useSelector((store) => store.X_setInterval);
    firstTimer              = useSelector((store) => store.firstTimer);
    
//    let current_question = props.numberQuestion;
//console.log('AnswerTest:  this.props.numberQuestion=',this.props.numberQuestion)
//console.log('AnswerTest:  currentTest=',currentTest)
//console.log('AnswerTest:  props.current_question=',props.current_question)

    let ID_li=[];
//    let par=[];
    let par1;    
    let j;
    let li_text=[];
    let counter = 0; // count of rows in the current question
    let li_key;
    let li_style=[];  // style of li
///    selected_answer = null;
    
    for (let key in arr_val) {
      counter++; //count of lines in a question (question, number correct answer, answers)
    }
    par1 = props.numberQuestion; //the number of the Question
//console.log('AnswerTest:  counter=',counter);
    for(let i=3; i < counter; i++){
      j = i - 3;
      selected_answer = j; //selected answer
//      par2[j] = j; //selected answer

//console.log('111 AnswerTest answ par2=',par2)      
      ID_li[j] = "id" + (par1*10 + j);
      li_key = "A" + (i-2);
      li_text[j] = arr_val[li_key];// answers list
//console.log('AnswerTest selected_answer=',selected_answer);
//console.log('AnswerTest props.numberQuestion=',props.numberQuestion);
//console.log('AnswerTest props.arr_state_green_red_props[0]=',props.arr_state_green_red_props[0]);
      li_style[j] = {backgroundColor:  "rgba(255,255,255,1)"}; //grey  0.5 
//console.log('state_green_red=',state_green_red);      
      
      if(state_green_red[par1][1] === j){
        li_style[j] = {backgroundColor:  "green"};
      }         
      if((state_green_red[par1][0] === j) && 
        (state_green_red[par1][0] !== 
          state_green_red[par1][1])){      
          li_style[j] = {backgroundColor:  "rgba(255,192,171,0.5)"}; //red
      }
    } // for   
      
//console.log('ID_li=',ID_li);
//console.log('li_style=',li_style);
//console.log('li_text=',li_text);

    switch (counter) {

      case 4: 
        return (
            <li key={ID_li[0]} id={ID_li[0]} className="li_class"   
                onMouseEnter={(e) => yellowVisibility(li_style[0],e)}  
                onMouseLeave={(e) => greyVisibility(li_style[0],e)} 
                style={li_style[0]} 
                onClick={() => props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>
                {li_text[0]}
            </li>
        );
      case 5: 
      return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class" 
            onMouseEnter={(e) => yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) => greyVisibility(li_style[0],e)} 
            style={li_style[0]} onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>
            {li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class" 
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>
            {li_text[1]}
          </li>
        </>   
      )
      case 6: 
        return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[0],e)} 
            style={li_style[0]}  onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>
            {li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>
            {li_text[1]}
          </li>
          <li key={ID_li[2]} id={ID_li[2]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[2],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[2],e)} 
            style={li_style[2]} onClick={(evt) =>   props.func({par1: par1, par2: 3, par3: X_setInterval, par4: firstTimer})}>
            {li_text[2]}
          </li>
        </>
        )
      case 7: 
        return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[0],e)} 
            style={li_style[0]} onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>{li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>{li_text[1]}
          </li>
          <li key={ID_li[2]} id={ID_li[2]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[2],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[2],e)} 
            style={li_style[2]} onClick={(evt) =>   props.func({par1: par1, par2: 3, par3: X_setInterval, par4: firstTimer})}>{li_text[2]}
          </li>
          <li key={ID_li[3]} id={ID_li[3]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[3],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[3],e)} 
            style={li_style[3]} onClick={(evt) =>   props.func({par1: par1, par2: 4, par3: X_setInterval, par4: firstTimer})}>{li_text[3]}
          </li>
        </>
        )
      case 8: 
        return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[0],e)} 
            style={li_style[0]} onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>{li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>{li_text[1]}
          </li>
          <li key={ID_li[2]} id={ID_li[2]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[2],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[2],e)} 
            style={li_style[2]} onClick={(evt) =>   props.func({par1: par1, par2: 3, par3: X_setInterval, par4: firstTimer})}>{li_text[2]}
          </li>
          <li key={ID_li[3]} id={ID_li[3]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[3],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[3],e)} 
            style={li_style[3]} onClick={(evt) =>   props.func({par1: par1, par2: 4, par3: X_setInterval, par4: firstTimer})}>{li_text[3]}
          </li>
          <li key={ID_li[4]} id={ID_li[4]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[4],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[4],e)} 
            style={li_style[4]} onClick={(evt) =>   props.func({par1: par1, par2: 5, par3: X_setInterval, par4: firstTimer})}>{li_text[4]}
          </li>
        </>
        )                
      case 9: 
        return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[0],e)} 
            style={li_style[0]} onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>{li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>{li_text[1]}
          </li>
          <li key={ID_li[2]} id={ID_li[2]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[2],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[2],e)} 
            style={li_style[2]} onClick={(evt) =>   props.func({par1: par1, par2: 3, par3: X_setInterval, par4: firstTimer})}>{li_text[2]}
          </li>
          <li key={ID_li[3]} id={ID_li[3]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[3],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[3],e)} 
            style={li_style[3]} onClick={(evt) =>   props.func({par1: par1, par2: 4, par3: X_setInterval, par4: firstTimer})}>{li_text[3]}
          </li>
          <li key={ID_li[4]} id={ID_li[4]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[4],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[4],e)} 
            style={li_style[4]} onClick={(evt) =>   props.func({par1: par1, par2: 5, par3: X_setInterval, par4: firstTimer})}>{li_text[4]}
          </li>
          <li key={ID_li[5]} id={ID_li[5]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[5],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[5],e)} 
            style={li_style[5]} onClick={(evt) =>   props.func({par1: par1, par2: 6, par3: X_setInterval, par4: firstTimer})}>{li_text[5]}
          </li>          
        </>
        )       
      case 10: 
        return (
        <>
          <li key={ID_li[0]} id={ID_li[0]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[0],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[0],e)} 
            style={li_style[0]} onClick={(evt) =>   props.func({par1: par1, par2: 1, par3: X_setInterval, par4: firstTimer})}>{li_text[0]}
          </li>
          <li key={ID_li[1]} id={ID_li[1]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[1],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[1],e)} 
            style={li_style[1]} onClick={(evt) =>   props.func({par1: par1, par2: 2, par3: X_setInterval, par4: firstTimer})}>{li_text[1]}
          </li>
          <li key={ID_li[2]} id={ID_li[2]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[2],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[2],e)} 
            style={li_style[2]} onClick={(evt) =>   props.func({par1: par1, par2: 3, par3: X_setInterval, par4: firstTimer})}>{li_text[2]}
          </li>
          <li key={ID_li[3]} id={ID_li[3]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[3],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[3],e)} 
            style={li_style[3]} onClick={(evt) =>   props.func({par1: par1, par2: 4, par3: X_setInterval, par4: firstTimer})}>{li_text[3]}
          </li>
          <li key={ID_li[4]} id={ID_li[4]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[4],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[4],e)} 
            style={li_style[4]} onClick={(evt) =>   props.func({par1: par1, par2: 5, par3: X_setInterval, par4: firstTimer})}>{li_text[4]}
          </li>
          <li key={ID_li[5]} id={ID_li[5]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[5],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[5],e)} 
            style={li_style[5]} onClick={(evt) =>   props.func({par1: par1, par2: 6, par3: X_setInterval, par4: firstTimer})}>{li_text[5]}
          </li>          
          <li key={ID_li[6]} id={ID_li[6]} className="li_class"  
            onMouseEnter={(e) =>   yellowVisibility(li_style[6],e)}  
            onMouseLeave={(e) =>   greyVisibility(li_style[6],e)} 
            style={li_style[6]} onClick={(evt) =>   props.func({par1: par1, par2: 7, par3: X_setInterval, par4: firstTimer})}>{li_text[6]}
          </li>                    
        </>
        )                       
      default:
        return (<li key={ID_li[0]} id={ID_li[0]} className="li_class"    style={li_style[0]}
                onClick={(evt) =>   props.func({par1: par1, par2: 0, par3: X_setInterval, par4: firstTimer})}>{li_text[0]}</li>
                )
    } // swtch
    
} // --- end of AnswerTest

