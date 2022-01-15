//HeaderListen.js------------------

import React from 'react';

import {HeaderListenList} from "../headerListenList/HeaderListenList.js";

import  "./HeaderListen.css";

import { useSelector, useDispatch } from 'react-redux';


let list_listen_wrapper      = null;


export function HeaderListen() {

    console.log('HeaderListen-----');  


    function mouseEnterList() {  // mouse cursor is over id=header_menu_tests  --------------
        
//console.log('HeaderListen: mouseEnterList--------------')
//console.log('2 HeaderListen:  list_tests_wrapper=',list_tests_wrapper);
        
            dispatch({  type: 'HeaderListen_mouseEnterList', 
                    payload: {
                        list_listen_wrapper: 'visible'
                        
                    }
            });
        
    }//end of mouseEnterList--------------------


    function mouseLeaveList() { // mouse cursor is off id=header_menu_tests ------------------
//console.log('HeaderListen: mouseLeaveList-------')
                dispatch({  type: 'HeaderListen_mouseLeaveList', 
                            payload: {
                                list_listen_wrapper: 'hidden'
                            }
                });
    }// end of mouseLeaveList------------------------


    let dispatch = useDispatch();

    let work = null;

    list_listen_wrapper = useSelector((store) => store.list_listen_wrapper);

    let menuListen = 
    <div id="header_menu_listen" className="header_menu_item">
        Listen
    </div>


    if(list_listen_wrapper === 'visible') {
        work =  (<div id="list_listen_wrapper" style={{visibility:{list_listen_wrapper}}}>
                    <HeaderListenList />
                </div>)
    }
    else work = null;
    
    
    return  (
            <div id="header_menu_listen_cont_id" onMouseEnter={mouseEnterList} 
                                                 onMouseLeave={mouseLeaveList}>
                {menuListen}
                {work}
            </div>
    )
}//end of HeaderListen --------------------

    



