//Tests.js------Show chosen Test

import React from 'react';
import { useSelector } from 'react-redux';
import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";

export function Tests() {

    let showHideTest = useSelector((store) => store.showHideTest);

    let showCurrentTestWork = null;

    if(showHideTest) showCurrentTestWork = <ShowCurrentTest /> //<ShowCurrentTest parCallback = {testCallback} />;
    else showCurrentTestWork = null;

    return <section id="tests_wrapper">
        {showCurrentTestWork}
    </section>
}
