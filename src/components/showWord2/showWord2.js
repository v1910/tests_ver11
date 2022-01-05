// showWord2 - show next word

let state_button_show_words_color           = null;

let state_label_show_words_value            = null;

let state_label_show_words_visibility       = null;

let words                                   = null;

let work_arr                                = null;

let current_number_word                      = null;

let count_pick_button_show_word             = null;

let state_label_next_descr_value            = null;

let nWords                                  = null;

let state_button_next_word_value            = null;


export function showWord2(props) {	




   state_button_show_words_color           = props.props_showWord2.state_button_show_words_color;

//    state_label_show_words_value            = props.props_showWord2.state_label_show_words_value;

    state_label_show_words_visibility       = props.props_showWord2.state_label_show_words_visibility;

    words                                   = props.props_showWord2.words;

    work_arr                                = props.props_showWord2.work_arr;

    current_number_word                      = props.props_showWord2.current_number_word;

    count_pick_button_show_word             = props.props_showWord2.count_pick_button_show_word;

    state_label_next_descr_value            = props.props_showWord2.state_label_next_descr_value;

    nWords                                  = props.props_showWord2.nWords;

    state_button_next_word_value            = props.props_showWord2.state_button_next_word_value;

    


/*
console.log('showWord2: props=',props);
console.log('showWord2: current_number_word=', current_number_word);
console.log('showWord2: work_arr[ current_number_word]=',work_arr[ current_number_word]);
console.log('showWord2: words[ work_arr[ current_number_word]]=',words[ work_arr[ current_number_word]]);
console.log('showWord2: words[ work_arr[ current_number_word]].W=',words[ work_arr[ current_number_word]].W);
console.log('showWord2: props=',props);
*/
//    let style_state_button_show_words_color     = {color: state_button_show_words_color};
//    let work_state_label_show_words_value       = state_label_show_words_value;
//    let style_state_label_show_words_visibility = {visibility: state_label_show_words_visibility};
    //console.log('1 current_number_word=',current_number_word);
//      let buttonWord = document.getElementById("button_show_words");
    let ind =  words[work_arr[current_number_word]].W.length;
//      let labelWord = document.getElementById("label_words");

    state_button_show_words_color = "white";

    if(ind === 1) state_button_show_words_color = "red";

    if( count_pick_button_show_word < ind) {
      if(( count_pick_button_show_word === ind-1) || (ind === 1)){
        state_button_show_words_color = "red";
      }
      state_label_show_words_value  =  words[work_arr[current_number_word]].W[count_pick_button_show_word];
    }
    else {
        count_pick_button_show_word = 0;
        state_label_show_words_value  =  words[ work_arr[current_number_word]].W[count_pick_button_show_word];
    }

    count_pick_button_show_word++;

//console.log('showWord2: count_pick_button_show_word=',count_pick_button_show_word);
//console.log('showWord2: state_label_show_words_value=',state_label_show_words_value);    
//console.log('showWord2: work_arr=',work_arr);

    state_label_show_words_visibility = "visible";

    return {
        state_label_show_words_value:       state_label_show_words_value,
        state_button_show_words_color:      state_button_show_words_color,
        state_label_show_words_visibility:  state_label_show_words_visibility,
        count_pick_button_show_word:        count_pick_button_show_word,
        work_arr:                           work_arr,
        state_label_next_descr_value:       state_label_next_descr_value,
        nWords:                             nWords,
        state_button_next_word_value:       state_button_next_word_value
    };

}//---end of ShowWord2
