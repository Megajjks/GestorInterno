import React from 'react';
import '../../spiner.css';

const Spinner = () =>{
    return(
        <div class="sk-folding-cube" style={{paddingTop:'2em'}}>
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
    )
}

export default Spinner;