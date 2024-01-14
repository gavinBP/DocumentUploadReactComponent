import React, { Fragment } from 'react';
import "../css/main.css";
import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import miniFile from '../images/miniFile.png';
import miniPage from '../images/miniPage.png';


function UploadManifest(props) {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if(droppedFiles.length > 0) {
            const fileName = droppedFiles[0].name;
            let arr = [];
            for(let item of droppedFiles) {
                arr.push(<div>{item.name}</div>)
            }
            setFiles(arr);
        }
    }

    const handleUpload = (event) => {
        event.preventDefault();
        const droppedFiles = event.target.files;
        if(droppedFiles.length > 0) {
            const fileName = droppedFiles[0].name;
            let arr = [];
            for(let item of droppedFiles) {
                arr.push(<div>{item.name}</div>)
            }
            setFiles(arr);
        }
    }
    return (
        <>
            <div className='QuestionBlockQuestion'>Select a manifest that you'd like to import</div>
            <div className='uploadBox'>
                <div className='dropZone' onDragOver={handleDragOver} onDrop={handleDrop}>
                    <img src={miniFile} style={{height:"30px", marginRight: "10px", }}/>
                    <div style={{color: "#203c6c"}}>Drag &amp; Drop Here or<strong style={{marginLeft: "5px"}}>Browse</strong></div>
                </div>
                <input 
                    type="file"
                    multiple
                    // onChange={(event) => setFiles(event.target.files)}
                    onChange={handleUpload}
                    hidden
                    ref={inputRef}
                />
                <Button 
                    variant="contained"
                    style={{textTransform:"none", marginTop:"7px", backgroundColor:"#203c6c", width:"190px"}}
                    onClick={() => inputRef.current.click()}
                >Upload Manifest</Button>
            </div>
            <div>
            <div className='uploadLine'></div>
            {files !== null && (<div className='uploadedFile'>
                    <img src={miniPage} style={{height:"30px", marginRight: "10px"}}/>
                    <div>{files}</div>
                </div>)}
            <div className='uploadLine'></div>
            </div>
        </>
    )
}

export default UploadManifest;