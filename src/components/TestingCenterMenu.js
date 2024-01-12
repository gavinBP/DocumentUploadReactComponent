import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import TestingCenterDropDown from './TestingCenterDropDown';

function TestingCenterMenu(props) {


    return (
        <>
            <TestingCenterDropDown center={1}/>
            <TestingCenterDropDown center={2}/>
            <TestingCenterDropDown center={3}/>
            <TestingCenterDropDown center={4}/>
        </>
    )

}

export default TestingCenterMenu;