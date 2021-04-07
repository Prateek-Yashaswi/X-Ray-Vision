import React from 'react';
import './Developers.css';
const Devs = () => {
    return (
        <div className="devs-body">
            <h1>Developers</h1>
            <br></br>
            <ul>
                <li>
                    <div className="devs-details">
                        <h3>Sivin Varughese </h3>
                        <p>Details Here</p>
                    </div>
                </li>
                <li>
                    <div className="devs-details">
                        <h3>Sajan Kumar Kar </h3>
                        <p>Details Here</p>
                    </div>
                </li>
                <li>
                    <div className="devs-details">
                        <h3>Prateek Yashaswi </h3>
                        <p>Details Here</p>
                    </div>
                </li>
                <li>
                    <div className="devs-details">
                        <h3>Rishav Chowdhury </h3>
                        <p>Details Here</p>
                    </div>
                </li>
            </ul>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <div id="avatar-grp">

                <div className="avatar-div">
                    <div id="avatar-sivin"></div>
                    <br></br>
                    <p className='dev-desc'>Sivin Varughese</p>
                </div>

                <div className="avatar-div">
                    <div id="avatar-sajan"></div>
                    <br></br>
                    <p className='dev-desc'>Sajan Kumar Kar</p>
                </div>
                
                <div className="avatar-div">
                    <div id="avatar-prateek"></div>
                    <br></br>
                    <p className='dev-desc'>Prateek Yashaswi</p>
                </div>

                <div className="avatar-div">
                    <div id="avatar-rishav"></div>
                    <br></br>
                    <p className='dev-desc'>Rishav Chowdhury</p>
                </div>
            </div>
        </div>
    );
}

export default Devs;