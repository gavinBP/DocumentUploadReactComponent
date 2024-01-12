import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import QuestionBlockSection from './QuestionBlockSection';
import TestingCenterMenu from './TestingCenterMenu';

function LocationOptions(props) {


    return (
        <>
            <QuestionBlockSection />
            <TestingCenterMenu />
        </>
    )

}

export default LocationOptions;