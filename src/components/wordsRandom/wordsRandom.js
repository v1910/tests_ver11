// wordsRendom - it does random list of words

import React from "react";

import ReactDOM from 'react-dom';

import { getRandomInt }              from "../getRandomInt/getRandomInt.js";


export function wordsRandom (nWords) {
  

    let work_arr1 = [], work_arr2 = [];
    let nRandom;
    let topArr  =  nWords - 1;;
    let flag = true;


    // init work_arr1, work_arr2
    for(let i=0; i <  nWords; i++) {
      work_arr1[i] = i;
      work_arr2[i] = -1;
    }
    
    // random changing of words
    for(let i=0; i <  nWords; i++) {
      flag = true;
      nRandom = getRandomInt(0, topArr);
      if(work_arr2[nRandom] === -1) {
        work_arr2[nRandom] = i
        flag = false;
      }
      else {
        if(nRandom > 0) {
          for(let j=0; j<nRandom; j++) {
            if(work_arr2[nRandom-j-1] === -1) {
              work_arr2[nRandom-j-1] = i;
              flag = false;
              break;
            }					
          }
          if(flag && (nRandom < topArr))
          for(let j=nRandom+1; j< nWords; j++) {
            if(work_arr2[j] === -1) {
              work_arr2[j] = i;
              flag = false;
              break;
            }					
          }
          if((nRandom === topArr) && (work_arr2[nRandom] === -1)) work_arr2[nRandom] = i;			
        }
        else  // nRandom = 0
        for(let j=1; j< nWords; j++) {
          if(work_arr2[j] === -1) {
              work_arr2[j] = i;
              flag = false;						
              break;
          }					
        }
      }
      if(flag) console.log("system error:", "  i= ", i, "  nRandom= ", nRandom);
  //		console.log('i= ',i, '   nRandom= ',nRandom);
    }
    return work_arr2;
}//--- end of wordsRandom
