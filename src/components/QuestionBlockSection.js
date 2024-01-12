import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import QuestionBlock from './QuestionBlock';

function QuestionBlockSection(props) {


    return (
        <>
            <div className='QuestionBlockSection'>
                <QuestionBlock question={"Split schedule using social distancing?"} optionOne={"Yes"} optionTwo={"No"} noOptions={false}/>
                <div className='line'></div>
                <QuestionBlock question={"Location Checking:"} noOptions={true}/>
                <div className='line'></div>
                <QuestionBlock question={"Client:"} optionOne={"Single"} optionTwo={"Mulitple"} noOptions={false}/>
            </div>
        </>
    )

}

export default QuestionBlockSection;