//Words.js------------------

import React from 'react';

import { useSelector } from 'react-redux';

import  { ShowWordTest } from "../showWordTest/ShowWordTest.js";

export function Words() {

    let showHideWords = useSelector((store) => store.showHideWords);
     
    let showCurrentWordsWork = null;


    if(showHideWords) showCurrentWordsWork = <ShowWordTest /> //<ShowCurrentTest parCallback = {testCallback} />;
    else showCurrentWordsWork = null;
    
    return <section id="words_wrapper">
                {showCurrentWordsWork}
            </section>
}
