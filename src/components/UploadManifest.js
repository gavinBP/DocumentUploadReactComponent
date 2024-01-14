import React, { Fragment } from 'react';
import "../css/main.css";
import { useState } from 'react';
import Button from '@mui/material/Button';


function UploadManifest(props) {
    const [files, setFiles] = useState(null);

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <div className='QuestionBlockQuestion'>Select a manifest that you'd like to import</div>
            <div className='uploadBox'>
                <div className='dropZone' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <div style={{color: "#203c6c"}}>Drag &amp; Drop Here or<strong style={{marginLeft: "5px"}}>Browse</strong></div>
                </div>
                <Button style={{textTransform:"none"}}>Upload Manifest</Button>
            </div>
        </>
    )
}

export default UploadManifest;