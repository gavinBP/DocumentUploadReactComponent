import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function QuestionBlock(props) {
    const { question, optionOne, optionTwo, noOptions } = props;
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <div className='QuestionBlockQuestion'>{question}</div>
            {noOptions ? (<div style={{color: "green", paddingLeft:"10px"}}>All Available!</div>):(<div>
            <RadioGroup value={value} onChange={handleChange}>
                <div>
                <FormControlLabel value={"Yes"} control={<Radio />} label={optionOne} className='QuestionBlockAnswer'/>
                <FormControlLabel value={"No"} control={<Radio />} label={optionTwo} className='QuestionBlockAnswer'/>
                </div>
            </RadioGroup>
            </div>)}
        </>
    )
}

export default QuestionBlock;