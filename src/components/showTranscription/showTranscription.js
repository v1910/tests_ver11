// showTranscription - show transcription


let current_number_word                       = null;

let state_label_show_transcription_visibility = null;

let state_label_show_transcription_value      = null;

let words                                     = null;

let work_arr                                  = null;

let state_label_yes_no_word_value             = null;

let state_label_answer_visibility             = null;

let state_label_show_words_visibility         = null;

let nWords                                    = null;   

let state_label_show_words_value              = null;

let state_label_next_descr_value              = null;



export function showTranscription(props) {


  current_number_word                         = props.props_showTranscription.current_number_word;

  state_label_show_transcription_visibility   = props.props_showTranscription.state_label_show_transcription_visibility;

  words                                       = props.props_showTranscription.words;

  work_arr                                    = props.props_showTranscription.work_arr;

  state_label_yes_no_word_value               = props.props_showTranscription.state_label_yes_no_word_value;
  
  state_label_answer_visibility               = props.props_showTranscription.state_label_answer_visibility;
  
  state_label_show_words_visibility           = props.props_showTranscription.state_label_show_words_visibility;  

  nWords                                      = props.props_showTranscription.nWords;  

  state_label_show_words_value                = props.props_showTranscription.state_label_show_words_value; 
  
  state_label_next_descr_value                = props.props_showTranscription.state_label_next_descr_value;
  



//  let style_state_label_show_transcription_visibility = {visibility: state_label_show_transcription_visibility};
//    let work_state_label_show_transcription_value = state_label_show_transcription_value;

console.log(' showTranscription: props=', props)  
console.log(' showTranscription: state_label_yes_no_word_value=', state_label_yes_no_word_value)  
console.log(' showTranscription: state_label_answer_visibility=', state_label_answer_visibility)
console.log(' showTranscription: state_label_show_words_visibility=', state_label_show_words_visibility)
console.log('showTranscription: work_arr=', work_arr)
console.log('showTranscription: words[ work_arr[ curent_number_word]]=', words[ work_arr[current_number_word]])  


  state_label_show_transcription_value  =  words[work_arr[ current_number_word]].T;
  state_label_show_transcription_visibility = {visibility: "visible"};


  if(((state_label_yes_no_word_value === '') && (state_label_answer_visibility === "hide") &&
     (state_label_show_words_visibility === "hide"))
      ||  (
            (state_label_yes_no_word_value === "Wrong") && (state_label_answer_visibility === "hide") && 
            (state_label_show_words_visibility === "hide")
          )
      ||  (state_label_show_words_value === '')
     ){
      state_label_show_transcription_visibility = {visibility: "hidden"};
      state_label_show_transcription_value      = '';
     } else {
      state_label_show_transcription_visibility = {visibility: "visible"};
console.log('0 showTranscription: state_label_show_transcription_visibility=', state_label_show_transcription_visibility)      
     }
console.log('1 showTranscription: state_label_show_transcription_visibility=', state_label_show_transcription_visibility)
return {
      state_label_show_transcription_value:       state_label_show_transcription_value,
      state_label_show_transcription_visibility:  state_label_show_transcription_visibility,
      nWords:                                     nWords,
      state_label_next_descr_value:               state_label_next_descr_value,
      work_arr:                                   work_arr
    } 

}//---end of showTranscription