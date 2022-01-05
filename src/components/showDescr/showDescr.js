// showDescr - show next word description

let state_button_next_descr_color      = null;
let state_label_next_descr_value       = null;
let count_pick_button_show_description = null; 
let nWords                             = null; 

export function showDescr(props) {// number_par=1: return first parametr, otherwhise: second.

//console.log('showDescr: ++++++++++++++++++');  
//console.log('showDescr: props=',props, ' number_par=',number_par); 

console.log('0  showDescr: props.props_showDescr.state_label_next_descr_value =', props.props_showDescr.state_label_next_descr_value);
//console.log('showDescr: props.props_showDescr.words=',props.props_showDescr.words);	     
console.log('showDescr: props.props_showDescr.current_number_word=', props.props_showDescr.current_number_word);	    
//console.log('showDescr: props.props_showDescr.work_arr[props.props_showDescr.current_number_word]=',props.props_showDescr.work_arr[props.props_showDescr.current_number_word]);	    


  count_pick_button_show_description = props.props_showDescr.count_pick_button_show_description;
//  console.log('showDescr: props.props_showDescr.words=',props.props_showDescr.words);	     
  let ind = props.props_showDescr.words[props.props_showDescr.work_arr[props.props_showDescr.current_number_word]].D.length;
//console.log('ind =',ind);	
//console.log('1 showDescr: state_label_next_descr_value =', state_label_next_descr_value);	
//console.log('1 showDescr: count_pick_button_show_description =', count_pick_button_show_description);	
  state_button_next_descr_color  = "red";   

  if(ind > 1) {
      count_pick_button_show_description++;
    if( count_pick_button_show_description < ind) {
      if( count_pick_button_show_description === ind-1){
        state_button_next_descr_color  = "red";
      }
      else {
        state_button_next_descr_color  = "white";
      }
    }
    else  {
        count_pick_button_show_description = 0;
        state_button_next_descr_color  = "white";
    }
    state_label_next_descr_value =  props.props_showDescr.words[props.props_showDescr.work_arr[props.props_showDescr.current_number_word]].D[count_pick_button_show_description];    
  }
  else { // there is only one description
    state_label_next_descr_value =  props.props_showDescr.words[props.props_showDescr.work_arr[props.props_showDescr.current_number_word]].D[0];
  }


  
//console.log('1  showDescr: state_label_next_descr_value =', state_label_next_descr_value);	
//console.log('2  showDescr: count_pick_button_show_description =', count_pick_button_show_description);	            
    return  {
              state_button_next_descr_color:      state_button_next_descr_color, 
              state_label_next_descr_value:       state_label_next_descr_value,
              count_pick_button_show_description: count_pick_button_show_description,
              work_arr:                           props.props_showDescr.work_arr,
              nWords:                             props.props_showDescr.nWords  
            }

    
}//---end of ShowDescr
    