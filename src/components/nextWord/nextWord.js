// nextWord - go to next word

import {wordsRandom}      from "../wordsRandom/wordsRandom.js";


let state_button_next_descr_color                   = null;
let state_label_next_descr_value                    = null;
let state_input_word_value                          = null;
let state_label_yes_no_word_value                   = null;
let state_label_answer_value                        = null;
let state_label_answer_visibility                   = null;
let state_button_show_words_color                   = null;
let state_label_show_words_value                    = null;
let state_label_show_words_visibility               = null;
let state_label_show_transcription_value            = null;
let state_label_yes_no_word_style                   = null;
let state_label_show_transcription_visibility       = null;
let state_button_next_word_value                    = null;
let nWords                                          = null;
let count_pick_button_show_word                     = null;
let count_pick_button_show_description              = null;
let count_pick_button_show_answer                   = null;
let current_number_word                             = null;
let work_arr                                        = null;
let words                                           = null;
let input_input_word_value                          = null;
let button_show_descr_style                         = null;
let button_show_words_style                         = null;

export function nextWord(props) {

  nWords                                               = props.props_button_next_word.nWords;

  words                                                = props.props_button_next_word.words;

  state_button_next_descr_color                        = props.props_button_next_word.state_button_next_descr_color;

  state_label_yes_no_word_style                        = props.props_button_next_word.state_label_yes_no_word_style;

  state_label_answer_visibility                        = props.props_button_next_word.state_label_answer_visibility;

  state_button_show_words_color                        = props.props_button_next_word.state_button_show_words_color;

  state_label_show_words_visibility                    = props.props_button_next_word.state_label_show_words_visibility;

  state_label_show_transcription_visibility            = props.props_button_next_word.state_label_show_transcription_visibility;

  state_label_next_descr_value                         = props.props_button_next_word.state_label_next_descr_value;

  state_input_word_value                               = props.props_button_next_word.state_input_word_value;

  state_label_yes_no_word_value                        = '';

  state_label_answer_value                             = props.props_button_next_word.state_label_answer_value;

  state_button_next_word_value                         = props.props_button_next_word.state_button_next_word_value;

  current_number_word                                  = props.props_button_next_word.current_number_word;

  work_arr                                             = props.props_button_next_word.work_arr;
  
  
  
  console.log('nextWord: props=', props);     
  //    let style_state_button_next_descr_color = {color: state_button_next_descr_color};
  //    let style_state_label_yes_no_word_style = {color: state_label_yes_no_word_style.color, visibility: state_label_yes_no_word_style.visibility};
  state_label_answer_visibility             = {visibility: state_label_answer_visibility};
  state_button_show_words_color             = {color: state_button_show_words_color};
  state_label_show_words_visibility         = {visibility: state_label_show_words_visibility};
  state_input_word_value                    = '';
  state_label_show_words_value              = '';
  state_label_show_transcription_value      = '';
  state_button_next_descr_color             = 'white';   //{color: 'white'};
  state_label_yes_no_word_style             = {color: 'green', visibility: 'hide'};
  state_label_answer_visibility             = {visibility: 'hide'};
  state_button_show_words_color             = {color: 'white'};
  state_label_show_words_visibility         = {visibility: 'hide'};
  state_label_show_transcription_visibility = {visibility: 'hide'};
  count_pick_button_show_word               = 0;
  count_pick_button_show_description        = 0;
  count_pick_button_show_answer             = 0;         
  input_input_word_value                    = "";
  button_show_descr_style                   = "color: white";
  button_show_words_style                   = "color: white";

  current_number_word++;

   

  if( current_number_word >=  nWords) {
      current_number_word = 0;
      work_arr = wordsRandom(); // array with random indexes
  }


  state_label_next_descr_value =  words[ work_arr[ current_number_word]].D[ count_pick_button_show_word];

console.log('nextWord: current_number_word=', current_number_word)   
  let np1 =  current_number_word + 1;
  
state_button_next_word_value = "Next Word " + String(np1) +'/'+ nWords;
//console.log('ShowWordTest: nextWord: state_label_yes_no_word_style=',state_label_yes_no_word_style);	

  state_label_answer_value      = '';
  state_button_show_words_color = 'white';

  return {      
      state_button_next_descr_color:                  state_button_next_descr_color,
      state_label_next_descr_value:                   state_label_next_descr_value,
      state_input_word_value:                         state_input_word_value,       
      state_label_yes_no_word_value:                  state_label_yes_no_word_value,
      state_label_answer_value:                       state_label_answer_value,
      state_label_answer_visibility:                  state_label_answer_visibility,
      state_button_show_words_color:                  state_button_show_words_color,
      state_label_show_words_value:                   state_label_show_words_value,
      state_label_show_words_visibility:              state_label_show_words_visibility,    
      state_label_show_transcription_visibility:      state_label_show_transcription_visibility,
      state_label_show_transcription_value:           state_label_show_transcription_value,
      state_button_next_word_value:                   state_button_next_word_value,
      input_input_word_value:                         input_input_word_value,
      button_show_descr_style:                        button_show_descr_style,
      button_show_words_style:                        button_show_words_style,
      current_number_word:                            current_number_word,
      work_arr:                                       work_arr,
      nWords:                                         nWords
  }      

}//---end of NextWord
//<label id="label_yes_no_word" style={state_label_yes_no_word_style}>{state_label_yes_no_word_value}</label>
    