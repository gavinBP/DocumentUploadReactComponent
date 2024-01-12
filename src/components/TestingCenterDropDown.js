import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import StyledMenu from './StyledMenu.js'
import miniClock from '../images/miniClock.png'


function TestingCenterDropDown(props) {

    const center = props.center;

    return (
        <div className='testing-center'>
            <div style={{display: "flex",
            alignItems: "center",
            textAlign: "center",
            marginRight: "50px",
            color: "#203c6c"}}>Testing Center {center}</div>
            <StyledMenu id="Select Client"></StyledMenu>
            <div className='miniClock'>
            <img src={miniClock} style={{height:"30px", marginTop:"5px"}}/>
            </div>
        </div>
    )

}

export default TestingCenterDropDown;