import React, { Component } from 'react'
import "../css/main.css";
import StyledMenu from './StyledMenu.js'
import LocationOptions from './LocationOptions';
import SwitchButton from './SwitchButton'
import QuestionBlock from './QuestionBlock';
import UploadManifest from './UploadManifest';
import Button from '@mui/material/Button';

class App extends Component {

    render() {
        return (
            <div style={{padding:"200px"}}>
                <div className='mainDiv'>
                <div>
                    <Button variant="contained" style={{backgroundColor:"#203c6c", borderRadius: "10px"}}>X</Button>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection: "column",
                    alignItems: "center"
                    }}>
                    <div className='header'>Document Upload</div>
                    <div className='line' style={{width:"300px"}}></div>
                </div>
                <div className='mainInfoDiv'>
                    <div style={{marginRight:"30px"}}>
                        <StyledMenu name={"Select Import Name:"} addPaddingRight={true} style={{}}/>
                        <div className='line' style={{width:"300px"}}></div>
                        <UploadManifest />
                        <div className='line' style={{width:"300px"}}></div>
                        <QuestionBlock question={"Elapse Data Checking:"} noOptions={true} statement={"No Elapsed Dates!"}/>
                        <div className='line' style={{width:"300px"}}></div>
                        <QuestionBlock question={"ToleranceWindow:"} isToleranceWindow={true} />
                    </div>
                    <div>
                        <LocationOptions />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px"}}>
                    <div className='footer'>Data in the import file is correct. Please press Continue to import.</div>
                    <div>
                        <Button variant="contained" style={{backgroundColor:"#203c6c", fontSize: "10px", margin:"12px", borderRadius: "7px", padding: "12px", paddingRight:"40px", paddingLeft:"40px"}}>Continue Import</Button>
                        <Button style={{color:"orange", fontSize: "10px", border:"2px solid orange", margin:"12px", borderRadius: "7px", padding: "11px", paddingRight:"70px", paddingLeft:"70px"}}>Cancel</Button>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default App;