import React, { Component } from 'react'
import "../css/main.css";
import LocationOptions from './LocationOptions';
import SwitchButton from './SwitchButton'
import QuestionBlock from './QuestionBlock';
import UploadManifest from './UploadManifest';

class App extends Component {

    render() {
        return (
            <div className='mainDiv'>
                <div>
                    X
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
                    <div>
                        <UploadManifest />
                        <QuestionBlock question={"Elapse Data Checking:"} noOptions={true} statement={"No Elapsed Dates!"}/>
                        <div className='line' style={{width:"300px"}}></div>
                        <QuestionBlock question={"ToleranceWindow:"} isToleranceWindow={true} />
                    </div>
                    <div>
                        <LocationOptions />
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }

}

export default App;