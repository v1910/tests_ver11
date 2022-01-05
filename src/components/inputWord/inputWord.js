// inputWord - input the root word

import {currentWordClean} from "../currentWordClean/currentWordClean.js"; //read the current word without (v), (a), (n), (c)


let state_label_yes_no_word_style  = null;

let words                          = null;

let work_arr                       = null;

let current_number_word            = null;

let state_label_yes_no_word_value  = null;

let input_input_word_value         = null;

let state_label_next_descr_value   = null;

let nWords                         = null;


export function inputWord(props) {

console.log('inputWord: props=',props)  

//  state_label_yes_no_word_style = props.props_inputWord.state_label_yes_no_word_style;

  words                         = props.props_inputWord.words;

  work_arr                      = props.props_inputWord.work_arr;

  current_number_word           = props.props_inputWord.current_number_word;
  
  input_input_word_value        = props.props_inputWord.input_input_word_value;

  state_label_next_descr_value  = props.props_inputWord.state_label_next_descr_value;

  nWords                        = props.props_inputWord.nWords;

//  let input_word = document.getElementById("input_input_word"); //inputWord

//    let work_state_label_yes_no_word_value =  state_label_yes_no_word_value;
//       state_label_yes_no_word_style: {color:  'green', visibility: 'hidden'},    
console.log(' inputWord: curent_number_word=', current_number_word)  
console.log(' words[ work_arr[ curent_number_word]]=', words[ work_arr[current_number_word]])  
console.log(' work_arr=', work_arr)
  let current_word =  words[ work_arr[ current_number_word]].W[0];
//console.log('inputWord: current_word=',current_word);  
console.log('inputWord: input_input_word_value=',input_input_word_value)
//console.log('style_state_label_yes_no_word_style=',style_state_label_yes_no_word_style)
  state_label_yes_no_word_style = {color: 'green', visibility: 'visible'};

  if((input_input_word_value !== '') && (input_input_word_value !== null) && (input_input_word_value !== undefined)){//&& input_word.isConfirmed){
    if(input_input_word_value === currentWordClean(current_word)) { 
        state_label_yes_no_word_value = 'Correct'; //'\u2705';
        state_label_yes_no_word_style = {color: 'green', visibility: 'visible'};
    }
    else {
        state_label_yes_no_word_value = "Wrong";
        state_label_yes_no_word_style = {color: "red", visibility: "visible"};
//        style_state_label_yes_no_word_style.color = "red";
    }
//      style_state_label_yes_no_word_style.visibility = "visible";
  } 
  else {
    state_label_yes_no_word_value = '';
    state_label_yes_no_word_style = {color: "red", visibility: "hidden"};
  }
console.log('inputWord: state_label_yes_no_word_value=',state_label_yes_no_word_value)
console.log('inputWord: state_label_yes_no_word_style=',state_label_yes_no_word_style)
  return {
    state_label_yes_no_word_value:  state_label_yes_no_word_value,
    state_label_yes_no_word_style:  state_label_yes_no_word_style,
    work_arr:                       work_arr,
    state_label_next_descr_value:   state_label_next_descr_value,
    nWords:                         nWords
  };


}//---end of inputWord
