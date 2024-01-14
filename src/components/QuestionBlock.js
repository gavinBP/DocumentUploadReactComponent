import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwitchButton from './SwitchButton';
import miniClock from '../images/miniClock.png';

function QuestionBlock(props) {
    const { question, optionOne, optionTwo, noOptions, statement, isToleranceWindow } = props;
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(statement)
    }

    if(isToleranceWindow) {
        return (
            <>
                <div>
                    <div className='QuestionBlockQuestion'>{question}</div>
                </div>
                <div className='toleranceWindowOptions'>
                    <div>
                        <SwitchButton />
                    </div>
                    <div className='miniVertLine'></div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <img src={miniClock} style={{height:"30px", marginTop:"5px", marginRight: "10px", }}/>
                        <div style={{color: "#203c6c", width:"200px", display: "flex", textAlign: "center", alignItems: "center"}}>Select Tolerance Level</div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='QuestionBlockQuestion'>{question}</div>
            {noOptions ? (<div style={{color: "green", paddingLeft:"10px"}}>{statement}</div>):(<div>
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