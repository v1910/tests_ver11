// showAnswer - show current answer

let state_label_answer_value            = null;

let words                               = null;

let work_arr                            = null;

let current_number_word                 = null;

let count_pick_button_show_description  = null;

let state_label_answer_visibility       = null;

let state_label_next_descr_value        = null;     

let nWords                              = null;

let state_button_next_word_value        = null;


export  function showAnswer(props) {

//  state_label_answer_value            = props.props_showAnswer.state_label_answer_value;

  words                               = props.props_showAnswer.words;

  work_arr                            = props.props_showAnswer.work_arr;

  current_number_word                 = props.props_showAnswer.current_number_word;

  count_pick_button_show_description  = props.props_showAnswer.count_pick_button_show_description;

  state_label_next_descr_value        = props.props_showAnswer.state_label_next_descr_value;

  nWords                              = props.props_showAnswer.nWords;

  state_button_next_word_value        = props.props_showAnswer.state_button_next_word_value;


//  state_label_answer_visibility       = props.props_showAnswer.state_label_answer_visibility;

console.log('showAnswer: props=',props);
/*
console.log('showAnswer: curent_number_word=',current_number_word);
console.log('showAnswer: count_pick_button_show_description=',count_pick_button_show_description);
console.log('showAnswer: work_arr=',work_arr);
console.log('showAnswer: words=',words);
*/
  let ind =  words[ work_arr[current_number_word]].A.length;

  if(ind !==  words[ work_arr[current_number_word]].D.length) 
    console.log('system error in the word: ' +  words[ work_arr[current_number_word]].W[0]);

  if( count_pick_button_show_description >= 0)
    state_label_answer_value  =  words[ work_arr[current_number_word]].A[ count_pick_button_show_description]
  else state_label_answer_value  =  words[ work_arr[current_number_word]].A[0];

  state_label_answer_visibility = "visible";

  return  {
            state_label_answer_value:      state_label_answer_value,
            state_label_answer_visibility: state_label_answer_visibility,
            work_arr:                      work_arr,
            state_label_next_descr_value:  state_label_next_descr_value,
            nWords:                        nWords,
            state_button_next_word_value:  state_button_next_word_value
          };
      

}//---end of ShowAnswer
